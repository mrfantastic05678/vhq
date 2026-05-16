declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

const CONVERSION_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const CONVERSION_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;

export function trackConversion(value: number = 1.0, currency: string = "PKR") {
  if (typeof window === "undefined") return;

  console.log("[trackConversion] called", { value, currency, CONVERSION_ID, CONVERSION_LABEL });

  if (!CONVERSION_ID || !CONVERSION_LABEL) {
    console.warn("[trackConversion] Missing env vars — NEXT_PUBLIC_GOOGLE_ADS_ID or NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL not set");
    return;
  }

  const sendTo = `${CONVERSION_ID}/${CONVERSION_LABEL}`;

  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: sendTo,
      value,
      currency,
    });
    console.log("[trackConversion] gtag event fired →", sendTo);
  } else {
    // gtag not ready yet — push directly to dataLayer as fallback
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "conversion",
      send_to: sendTo,
      value,
      currency,
    });
    console.warn("[trackConversion] gtag not ready, pushed to dataLayer as fallback →", sendTo);
  }
}
