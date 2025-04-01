import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email, message } = await request.json();

    // Basic validation
    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message are required' },
        { status: 400 }
      );
    }

    // --- Input Sanitization (Recommended) ---
    // Basic sanitization to prevent potential XSS in the email body if displayed in a web context later
    const sanitizedMessage = message
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\n/g, '<br>'); // Keep line breaks visible in HTML

    const sanitizedEmail = email // Basic email format check is often good too, but keeping it simple here
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Create a transporter using Google's SMTP service
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // STARTTLS
      auth: {
        user: process.env.GMAIL_USER, // Your sending Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Your App Password
      },
      // Optional: Add connection timeout and other options if needed
      // connectionTimeout: 10000, // 10 seconds
    });

    // --- Rich HTML Email Template ---
    const emailHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          /* Basic Reset */
          body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
          table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
          img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
          body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; background-color: #f4f4f4; }
          a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
          }
        </style>
      </head>
      <body style="margin: 0 !important; padding: 0 !important; background-color: #f4f4f4;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td align="center" style="padding: 20px 0;">
              <table border="0" cellpadding="0" cellspacing="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                <tr>
                  <td align="center" style="padding: 30px 20px; background-color: #007bff; color: #ffffff; border-top-left-radius: 8px; border-top-right-radius: 8px;">
                    <h1 style="font-family: Arial, Helvetica, sans-serif; font-size: 24px; font-weight: bold; margin: 0;">New Portfolio Contact Message</h1>
                    </td>
                </tr>

                <tr>
                  <td align="left" style="padding: 30px 30px 20px 30px; font-family: Arial, Helvetica, sans-serif; font-size: 16px; line-height: 1.6; color: #333333;">
                    <p style="margin: 0 0 15px 0;">You've received a new message through your portfolio's contact form:</p>

                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 20px;">
                      <tr>
                        <td style="padding: 10px; background-color: #f9f9f9; border: 1px solid #eeeeee; font-weight: bold;" width="100">From:</td>
                        <td style="padding: 10px; border: 1px solid #eeeeee;">
                          <a href="mailto:${sanitizedEmail}" style="color: #007bff; text-decoration: none;">${sanitizedEmail}</a>
                        </td>
                      </tr>
                    </table>

                    <p style="margin: 20px 0 5px 0; font-weight: bold;">Message:</p>
                    <div style="background-color: #f9f9f9; border: 1px solid #eeeeee; border-radius: 4px; padding: 15px; min-height: 100px;">
                      ${sanitizedMessage}
                    </div>
                  </td>
                </tr>

                <tr>
                  <td align="center" style="padding: 20px 30px; background-color: #f4f4f4; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
                    <p style="font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: #888888; margin: 0;">
                      Sent via Portfolio Contact Form at: ${new Date().toLocaleString()}
                    </p>
                    </td>
                </tr>
              </table>
              </td>
          </tr>
        </table>
        </body>
      </html>
    `;

    // Send the email
    await transporter.sendMail({
      // Important: Use YOUR verified email as the sender for better deliverability
      from: `"Your Portfolio" <${process.env.GMAIL_USER}>`, // Use your name/site name and your actual Gmail address
      replyTo: sanitizedEmail, // Set the Reply-To header to the user's email
      to: 'yaswanthkosuru999@gmail.com', // The recipient (your email)
      subject: 'New Portfolio Contact Message',
      html: emailHtml, // Use the rich HTML template
      // text: `New message from: ${sanitizedEmail}\n\nMessage:\n${message}\n\nSent at: ${new Date().toLocaleString()}` // Optional: Provide a plain text version for non-HTML clients
    });

    console.log('Email sent successfully to:', 'yaswanthkosuru999@gmail.com');
    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    // Provide more detailed error logging if possible
    // e.g., log error.message or specific properties if available
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}