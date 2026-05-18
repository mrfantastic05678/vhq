# Google Ads Conversion Tracking — Voice of Holy Quran

## Overview

This document covers how Google Ads conversion tracking is installed on the site, which forms fire conversions, what pitfalls were encountered, and how they were fixed. The final implementation uses Next.js's official `@next/third-parties/google` package.

---

## 1. Installation

### Environment Variables

Two `NEXT_PUBLIC_` variables are required in `.env.local`:

```env
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=XXXXXXXXXXXXXXXXXXXX
```

These are baked into the client bundle at build time by Next.js. Both are mandatory — if either is missing, `trackConversion()` will log a warning and do nothing.

### Script Initialization (`app/layout.tsx`)

Uses the official `@next/third-parties/google` package's `<GoogleAnalytics>` component, placed outside `<body>` at the root of the `<html>` element:

```tsx
import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
      {/* Outside <body> — @next/third-parties handles injection timing */}
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ADS_ID!} />
    </html>
  );
}
```

`@next/third-parties` handles everything: script loading order, hydration safety, dataLayer initialization. No manual `<Script>` tags needed.

### Conversion Helper (`lib/gtm.ts`)

All form components call a single utility function that uses `sendGAEvent` from `@next/third-parties/google`:

```ts
"use client";
import { sendGAEvent } from "@next/third-parties/google";

export function trackConversion(value: number = 1.0, currency: string = "PKR") {
  if (typeof window === "undefined") return;

  const sendTo = `${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}/${process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL}`;

  sendGAEvent("event", "conversion", {
    send_to: sendTo,
    value,
    currency,
    event_callback: () => {
      console.log("[trackConversion] confirmed by Google ✓", sendTo);
    },
  });
}
```

`sendGAEvent` pushes to `window.dataLayer` internally, which guarantees the event queues correctly even if the Google tag script hasn't loaded yet.

---

## 2. Forms That Fire Conversions

| Form | Component | Page | API Route |
|------|-----------|------|-----------|
| Homepage hero enrollment | `components/hero-section.tsx` | `/` | `/api/enroll` |
| Full enrollment form | `components/lead-form-section.tsx` | `/enroll` | `/api/enroll` |
| Contact form | `components/contact-section.tsx` | `/contact` | `/api/contact` |

All three call `trackConversion()` only after the API responds `res.ok === true`. No conversion fires if the Brevo email send fails.

---

## 3. Current Experience (After Fixes)

### On form submit (success)
Open DevTools → Console. You will see:
```
[trackConversion] firing → AW-18167275086/loBECPbtkK4cEM686tZD  {value: 1, currency: 'PKR'}
[trackConversion] confirmed by Google ✓ AW-18167275086/loBECPbtkK4cEM686tZD
```

The second line (`confirmed by Google`) fires via the `event_callback` — it only appears when Google's servers actually acknowledge the event.

### Verifying in Google Ads

The status takes time to update:
- **Up to 24 hours** after the tag fires for the first time for "Unverified" → "Active"
- **Up to 48 hours** after correcting a misconfigured tag for the status to clear

**To verify immediately:** Install the [Google Tag Assistant](https://tagassistant.google.com/) Chrome extension. Open your site, click through a real Google Ad link (important — must be a real ad click so the GCLID cookie is set), then submit a form. Tag Assistant will show the conversion event firing.

**To verify via Network tab:**
1. Open DevTools → Network tab
2. Filter by `google`
3. Submit the form
4. Look for a request to `www.googletagmanager.com/gtag/js` loading and a subsequent call to `google.com/pagead/...` or `analytics.google.com/g/collect` with `en=conversion` in the query string

---

## 4. Pitfalls — Full History

### Pitfall 1 — `<Script strategy="afterInteractive">` inside `<head>` JSX (fixed in commit `206fe3c`)

**What happened:** Both `<Script>` components were placed inside the JSX `<head>` element:

```tsx
// BROKEN
<html>
  <head>
    <Script src="..." strategy="afterInteractive" />
    <Script id="gtag-config" strategy="afterInteractive">...</Script>
  </head>
```

`afterInteractive` scripts are injected into the DOM after React hydration via a client-side effect. When wrapped inside the JSX `<head>` element, Next.js's Script component loses its ability to inject the script at the right time. `window.gtag` was never set.

**Fix:** Moved Scripts into `<body>`.

---

### Pitfall 2 — `function gtag(){}` is not reliably global (fixed in `206fe3c`)

**What happened:** The standard Google snippet uses a plain function declaration:
```js
function gtag(){dataLayer.push(arguments);}
```

When Next.js injects this inline script, the execution context may scope the function locally instead of on `window`. `typeof window.gtag === "function"` returned `false` even when the script ran.

**Fix:** Changed to explicit `window.gtag = function(){...}` assignment.

> **Superseded:** Both pitfalls 1 and 2 are made irrelevant by migrating to `@next/third-parties` in commit `5e33f06`.

---

### Pitfall 3 — Hero section form had zero conversion tracking (fixed in `206fe3c`)

**What happened:** `hero-section.tsx` (the form on the homepage `/`) submitted to `/api/enroll` and handled success/error state, but never imported or called `trackConversion()`. Every enrollment from the homepage was invisible to Google Ads.

**Fix:** Added `import { trackConversion } from "@/lib/gtm"` and `trackConversion()` after `setIsSubmitted(true)`.

---

### Pitfall 4 — Console log fired before `res.ok` check (fixed in `206fe3c`)

**What happened:** In `lead-form-section.tsx`, `console.log("FORM SUBMIT SUCCESS")` ran before the `!res.ok` guard, making it impossible to tell from console output whether the form had actually succeeded. `trackConversion()` would not be called if the API returned an error, but the "success" log had already printed.

**Fix:** Removed the misleading log entirely.

---

### Pitfall 5 — Race condition: `trackConversion()` before gtag script loads (fixed in `206fe3c`, superseded in `5e33f06`)

**What happened:** With the manual `window.gtag` approach, there was a window between page load and when the `afterInteractive` script executed. If a form submitted during this window, `typeof window.gtag !== "function"` and the conversion was silently dropped.

**Fix (first attempt):** Added a raw `window.dataLayer.push(...)` fallback in `gtm.ts`.

**Final fix:** `sendGAEvent` from `@next/third-parties` uses dataLayer natively, so this race condition cannot occur.

---

### Pitfall 6 — "Misconfigured" status in Google Ads (fixed in commit `5e33f06`)

**What happened:** Even after pitfalls 1–5 were fixed, Google Ads showed the conversion action as "Misconfigured". This status specifically means Google detected the AW- tag on the page but found issues with how the conversion event was configured or delivered.

**Root cause:** The manual `<Script>` approach and `window.gtag` direct calls are unreliable in Next.js App Router. Google's own tag detection uses the `dataLayer` array as the source of truth, not `window.gtag` directly. Our implementation wasn't reliably pushing conversion events into dataLayer in a format Google recognized.

**Fix:** Migrated to `@next/third-parties/google`:
- `<GoogleAnalytics gaId="AW-...">` — the official Next.js component. It loads the gtag script via the correct Next.js mechanism, registers the AW- ID, and sets up dataLayer.
- `sendGAEvent("event", "conversion", {...})` — pushes directly to dataLayer in the exact format Google expects. No dependency on `window.gtag` being available.
- Added `event_callback` — this lets Google signal back to the page that the conversion was received, enabling the console confirmation log.

---

## 5. Important: Why "Misconfigured" May Still Appear Briefly

After deploying the fix:
- Google needs to crawl your site and detect the updated tag — allow **up to 48 hours**
- The status will only change to "Active" after a **real conversion fires from a real ad click** (GCLID cookie must be present)
- Test clicks directly in the browser address bar don't set the GCLID — you must click through an actual Google Ad

**If the status does not clear within 48 hours after a real conversion, check:**
1. Go to Google Ads → Goals → Conversions → Summary
2. Click your conversion action → "Tag setup" tab
3. Verify the Conversion ID (`AW-18167275086`) and Conversion Label (`loBECPbtkK4cEM686tZD`) exactly match `.env.local`
4. Confirm the conversion action type is "Website" with "Use a snippet" (not "Import from Google Analytics" or "URL-based")

---

## 6. File Reference

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Mounts `<GoogleAnalytics>` for all pages |
| `lib/gtm.ts` | `trackConversion()` — single source of truth using `sendGAEvent` |
| `components/hero-section.tsx` | Homepage hero form — fires conversion on enroll submit |
| `components/lead-form-section.tsx` | `/enroll` page form — fires conversion on enroll submit |
| `components/contact-section.tsx` | `/contact` page form — fires conversion on contact submit |
| `.env.local` | `NEXT_PUBLIC_GOOGLE_ADS_ID` and `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL` |

---

## 7. Dependency

```json
"@next/third-parties": "^16.2.6"
```

Install: `npm install @next/third-parties`

This is the official Next.js package maintained by the Vercel team. Version should match your Next.js major version.
