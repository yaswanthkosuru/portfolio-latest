import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, message } = await request.json();

    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message are required' },
        { status: 400 }
      );
    }

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': process.env.BREVO_API_KEY!,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: {
          name: 'Portfolio Contact Form',
          email: email,
        },
        to: [
          {
            email: "yaswanthkosuru999@gmail.com",
          },
        ],
        subject: 'New Portfolio Contact Message',
        htmlContent: `
          <h2>New Portfolio Contact Message</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <p>Sent at: ${new Date().toLocaleString()}</p>
        `,
      }),
    });

    console.log('Response:', response);

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
