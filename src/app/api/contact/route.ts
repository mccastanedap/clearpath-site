import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    await sgMail.send({
      from: process.env.SENDGRID_FROM_EMAIL!,
      to: process.env.SENDGRID_TO_EMAIL!,
      replyTo: email,
      subject: `New message from ${name} — Clearpath Data`,
      html: `
        <div style="font-family:sans-serif;max-width:600px">
          <h2 style="color:#112b50">New contact form submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <p style="background:#f4f6f9;padding:16px;border-radius:8px;white-space:pre-wrap">${message}</p>
        </div>
      `,
    });
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    const message = err?.response?.body ?? err?.message ?? err;
    console.error("SendGrid error:", JSON.stringify(message, null, 2));
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
