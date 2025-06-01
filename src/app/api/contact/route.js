import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message,phone } = await req.json();

    // Check if SMTP credentials exist
    if (!process.env.ZOHO_SMTP_HOST || !process.env.ZOHO_SMTP_USER || !process.env.ZOHO_SMTP_PASS) {
      return new Response(
        JSON.stringify({ success: false, error: "Email service is temporarily disabled." }),
        { status: 503, headers: { "Content-Type": "application/json" } }
      );
    }

    let transporter = nodemailer.createTransport({
      host: process.env.ZOHO_SMTP_HOST,
      port: process.env.ZOHO_SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.ZOHO_SMTP_USER,
        pass: process.env.ZOHO_SMTP_PASS,
      },
    });
const recipients = [
      process.env.ZOHO_SMTP_USER,
      process.env.ZOHO_SECOND_RECIPIENT // 👈 Add this in your .env.local
    ].filter(Boolean).join(", "); // Removes empty entries and joins
    
    let mailOptions = {
      from: `"${name}" <${process.env.ZOHO_SMTP_USER}>`,
      to: recipients,
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nPhone: ${phone}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Email Error:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to send email" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
