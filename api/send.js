const { Resend } = require('resend');
const express = require('express');
const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(express.json());

app.post('/api/send', async (req, res) => {
    const { email, subject, message } = req.body;

    try {
        const data = await resend.emails.send({
            from: process.env.FROM_EMAIL,
            to: email,
            subject: subject,
            html: `<p>${message}</p>`
        });
        res.status(200).json({ success: true, data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = app;
