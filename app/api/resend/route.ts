import { resend } from '@/lib/resend';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { attachment, filename, name, email, comment } = body;
    const html = `
    <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
      <h2 style="color: #333; border-bottom: 2px solid #60a5fa; padding-bottom: 10px;">Contact Form Submission</h2>
      <p style="font-size: 16px; margin-bottom: 10px;"><strong>Name:</strong> ${name}</p>
      <p style="font-size: 16px; margin-bottom: 10px;"><strong>Email:</strong> ${email}</p>
      <p style="font-size: 16px; margin-bottom: 10px;"><strong>Message:</strong> ${comment}</p>
    </div>
    `;
    const { data } = await resend.emails.send({
      from: 'User <onboarding@resend.dev>',
      to: ['yidiyu0507s@163.com'],
      subject: 'CV',
      html: html,
      attachments: [
        {
          content: attachment,
          filename: filename,
        },
      ],
    });

    return NextResponse.json({ data: data?.id }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 },
    );
  }
}
