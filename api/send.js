const { data, error } = await resend.emails.send({
  from: process.env.FROM_EMAIL,
  to: userEmail,
  subject: "Your Subject Here",
  html: `
    <div style="border: 2px solid #eaeaea; padding: 20px; border-radius: 8px; font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">Hello from PrivateInfo!</h2>
      <p style="font-size: 16px; color: #555;">This is a professionally styled email.</p>
      
      <blockquote style="border-left: 4px solid #0070f3; margin: 20px 0; padding-left: 15px; color: #666; font-style: italic;">
        "Here is a nicely formatted quotation block."
      </blockquote>
      
      <p style="font-size: 16px; color: #555;">Best regards,<br><strong>The PrivateInfo Team</strong></p>
    </div>
  `
});
