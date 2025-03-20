require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN,  // ✅ Uses environment variable
  methods: "GET,POST",
  allowedHeaders: "Content-Type"
}));

app.use(express.json());


const ELASTIC_API_KEY = process.env.ELASTIC_EMAIL_API_KEY;
const ELASTIC_FROM_EMAIL = process.env.ELASTIC_FROM_EMAIL;

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;
  const data = {
      apikey: ELASTIC_API_KEY,
      subject: `New Contact Form Submission from ${name}`,
      from: ELASTIC_FROM_EMAIL,
      to: "adamkvassniak@gmail.com", // Replace with your email
      bodyText: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      isTransactional: true,
  };

  try {
      const response = await axios.post("https://api.elasticemail.com/v2/email/send", null, { params: data });
      console.log("✅ Email sent:", response.data);
      res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
      console.error("❌ Email Sending Error:", error.response?.data || error.message);
      res.status(500).json({ success: false, error: "Failed to send email" });
  }
});


const PORT = process.env.PORT;
console.log("Starting server...");
console.log("Using email:", process.env.EMAIL_USER);
console.log("Listening on port:", PORT);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});