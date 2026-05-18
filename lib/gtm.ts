"use client";

import { sendGAEvent } from "@next/third-parties/google";

const CONVERSION_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const CONVERSION_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;

export function trackConversion(value: number = 1.0, currency: string = "PKR") {
  if (typeof window === "undefined") return;

  if (!CONVERSION_ID || !CONVERSION_LABEL) {
    console.warn(
      "[trackConversion] Missing env vars — NEXT_PUBLIC_GOOGLE_ADS_ID or NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL not set"
    );
    return;
  }

  const sendTo = `${CONVERSION_ID}/${CONVERSION_LABEL}`;

  console.log("[trackConversion] firing →", sendTo, { value, currency });

  sendGAEvent("event", "conversion", {
    send_to: sendTo,
    value,
    currency,
    event_callback: () => {
      console.log("[trackConversion] confirmed by Google ✓", sendTo);
    },
  });
}
