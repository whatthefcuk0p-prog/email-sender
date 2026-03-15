import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { to, subject, message, consularDetails } = req.body;

  try {
    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: [to],
      subject: subject || "Application Update",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #002147; padding: 20px; text-align: center; color: white;">
            <h1 style="margin: 0;">Official Notification</h1>
          </div>
          <div style="padding: 30px;">
            <h2 style="color: #2e7d32;">Status: Approved</h2>
            <p>${message}</p>
            <div style="background-color: #f9f9f9; padding: 15px; border-left: 5px solid #002147; margin: 20px 0;">
              <strong>Consular Information:</strong><br>
              ${consularDetails || "Please check the portal for details."}
            </div>
            <p style="font-size: 12px; color: #888;">Sent via PrivateInfo.net</p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to send email', details: err.message });
  }
}
