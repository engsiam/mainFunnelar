import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { name, email, phone, message } = req.body;
    console.log("Received Data:", { name, email, message });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Ensure this is set in .env.local
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "followfarhad@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; background: #ffffff; border-radius: 8px;border: 2px solid #FC9F59">
          <h2 style="background: linear-gradient(90deg, #FC9F59 0%, #FC9F59  100%); color: #ffffff; padding: 15px; text-align: center;">funnelar - Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong> ${message}</p>
          <hr style="border: 1px solid #1FCFC1; margin: 20px 0;">
          <p style="text-align:center; color:#777;">Thank you for reaching out to infini Softech. We will get back to you soon.</p>
          <p style="text-align:center;"><a href="https://www.funnelar.io" style="color:#1FCFC1; text-decoration:none;">Visit our website</a></p>
        </div>
      `,
    };

    // Confirmation Email to User
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email, // Send to the user's email
      subject: "Thank You for Your Submission!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; background: #ffffff; border-radius: 8px; border: 2px solid #1FCFC1">
          <h2 style="background: linear-gradient(90deg, #1FCFC1 0%, #1FCFC1 100%); color: #ffffff; padding: 15px; text-align: center;">Thank You, ${name}!</h2>
          <p>Dear ${name},</p>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <hr style="border: 1px solid #1FCFC1; margin: 20px 0;">
          <p style="text-align:center; color:#777;">For any urgent queries, please visit our website.</p>
          <p style="text-align:center;"><a href="https://www.funnelar.io" style="color:#1FCFC1; text-decoration:none;">Visit our website</a></p>
        </div>
      `,
    };

    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error); // Log the exact error
    return res
      .status(500)
      .json({ message: "Error sending email", error: error.message });
  }
}
