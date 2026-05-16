import { BrevoClient } from "@getbrevo/brevo";

const apiKey = process.env.BREVO_API_KEY;

if (!apiKey) {
  console.warn("BREVO_API_KEY is not set — email sending will fail.");
}

const brevo = new BrevoClient({
  apiKey: apiKey || "placeholder",
});

export { brevo };

