const { data, error } = await resend.emails.send({
  from: process.env.FROM_EMAIL,
  to: userEmail,
  subject: "Application Approved",
  // 1. CHANGE 'text' TO 'html'
  html: `
    <div style="font-family: sans-serif; border: 2px solid #002147; padding: 20px; border-radius: 10px; max-width: 500px;">
      <h1 style="color: #2e7d32;">Approved</h1>
      <p>Your application has been processed.</p>
      
      <div style="background: #f4f4f4; padding: 15px; border-left: 5px solid #002147;">
        <strong>Consular Information:</strong><br>
        Location: Main Office<br>
        Status: Valid
      </div>

      <p style="margin-top: 20px; font-style: italic; color: #666;">
        "Please bring your original documents to the appointment."
      </p>
    </div>
  ` // 2. USE BACKTICKS ` TO WRAP THE CODE
});
