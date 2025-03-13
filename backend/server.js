require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN,  // ✅ Uses environment variable
  methods: "GET,POST",
  allowedHeaders: "Content-Type"
}));

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/send-email", async (req, res) => {  
  const { name, email, message, honeypot } = req.body;

  // ✅ Honeypot Check (Reject Bots)
  if (honeypot) {
    console.warn("🛑 Spam bot detected! Request blocked.");
    return res.status(400).json({ success: false, message: "Spam detected!" });
  }

  console.log("✅ Valid form submission received:", { name, email });

  const mailOptions = {
    from: email,
    to: "adam.kvassniak@gmail.com",
    subject: `New Contact Form: ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "✅ Email sent successfully!" });
  } catch (error) {
    console.error("❌ Email Sending Error:", error);
    res.status(500).json({ success: false, message: "Error sending email" });
  }
});

const PORT = process.env.PORT;

console.log("Starting server...");
console.log("Using email:", process.env.EMAIL_USER);
console.log("Listening on port:", PORT);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});