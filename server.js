app.post('/send-email', async (req, res) => {
  const { email, subject, message } = req.body;

  const { data, error } = await resend.emails.send({
    from: process.env.FROM_EMAIL,
    to: email, // Sends to the one address you typed
    subject: subject,
    html: `<p>${message}</p>`,
  });

  if (error) return res.status(500).json({ error });
  res.status(200).json({ message: 'Email sent successfully!' });
});
