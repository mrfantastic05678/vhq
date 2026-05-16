import { NextRequest, NextResponse } from "next/server";
import { brevo } from "@/lib/brevo";
import { escapeHtml } from "@/lib/escape-html";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, subject, message, website_url } = body;

    // Honeypot check for spam bots
    if (website_url) {
      // Silently reject but return success to fool the bot
      console.log("Spam bot detected and blocked in contact form.");
      return NextResponse.json({ success: true });
    }

    // Validate required fields
    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.BREVO_RECIPIENT_EMAIL;
    const senderEmail = process.env.BREVO_SENDER_EMAIL;
    const senderName = process.env.BREVO_SENDER_NAME;

    if (!recipientEmail || !senderEmail) {
      console.error("Missing BREVO_RECIPIENT_EMAIL or BREVO_SENDER_EMAIL");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const fullName = lastName ? `${firstName} ${lastName}` : firstName;
    const submissionDate = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Karachi",
      dateStyle: "full",
      timeStyle: "short",
    });

    const subjectLabels: Record<string, string> = {
      trial: "Free Trial Booking",
      courses: "Course Information",
      pricing: "Monthly Plans & Pricing",
      technical: "Technical Support",
      other: "Other",
    };

    const subjectText = subjectLabels[subject] || subject || "General Inquiry";

    const htmlContent = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;">
    <tr>
      <td align="center" style="padding:40px 0;">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.1);">
          <tr>
            <td style="background:linear-gradient(135deg,#001948,#2563eb);padding:30px;text-align:center;">
              <h1 style="margin:0;color:#fff;font-size:24px;">📩 New Contact Message</h1>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.8);font-size:14px;">${escapeHtml(submissionDate)}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:30px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #eee;">
                    <p style="margin:0 0 4px;font-size:11px;color:#999;text-transform:uppercase;letter-spacing:1px;">Name</p>
                    <p style="margin:0;font-size:16px;color:#333;font-weight:bold;">${escapeHtml(fullName)}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #eee;">
                    <p style="margin:0 0 4px;font-size:11px;color:#999;text-transform:uppercase;letter-spacing:1px;">Email</p>
                    <p style="margin:0;font-size:16px;"><a href="mailto:${escapeHtml(email)}" style="color:#2563eb;text-decoration:none;">${escapeHtml(email)}</a></p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #eee;">
                    <p style="margin:0 0 4px;font-size:11px;color:#999;text-transform:uppercase;letter-spacing:1px;">Subject</p>
                    <p style="margin:0;font-size:16px;color:#2563eb;font-weight:bold;">${escapeHtml(subjectText)}</p>
                  </td>
                </tr>
              </table>

              <div style="margin-top:20px;">
                <p style="margin:0 0 8px;font-size:11px;color:#999;text-transform:uppercase;letter-spacing:1px;">Message</p>
                <div style="background:#f9f9f9;border-radius:6px;padding:16px;">
                  <p style="margin:0;font-size:15px;line-height:1.6;color:#333;white-space:pre-wrap;">${escapeHtml(message)}</p>
                </div>
              </div>

              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${escapeHtml(email)}" style="display:inline-block;padding:12px 28px;background:#2563eb;color:#fff;text-decoration:none;border-radius:6px;font-weight:bold;font-size:14px;">Reply to ${escapeHtml(fullName)}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background:#f9f9f9;padding:16px 30px;text-align:center;border-top:1px solid #eee;">
              <p style="margin:0;font-size:12px;color:#999;">Voice of Holy Quran Academy — Contact Notification</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    await brevo.transactionalEmails.sendTransacEmail({
      sender: { email: senderEmail, name: senderName || "Voice of Holy Quran" },
      to: [{ email: recipientEmail }],
      replyTo: { email, name: fullName },
      subject: `📩 Contact: ${fullName} — ${subjectText}`,
      htmlContent: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Contact email error:", error);
    const message =
      error instanceof Error ? error.message : "Failed to send email";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
