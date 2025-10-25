require("dotenv").config();
const rateLimit = require("express-rate-limit");
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

const allowedOrigins = process.env.CORS_ORIGIN.split(",");

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // allow server-to-server or Postman

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS not allowed"));
      }
    },
    methods: "GET,POST",
    allowedHeaders: "Content-Type",
  })
);

app.use(express.json());

const ELASTIC_API_KEY = process.env.ELASTIC_EMAIL_API_KEY;
const ELASTIC_FROM_EMAIL = process.env.ELASTIC_FROM_EMAIL;

const emailLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 2, // allow 5 emails per 15 minutes per IP
  message: {
    success: false,
    error: "Too many requests from this IP, please try again later.",
  },
  standardHeaders: true, // return rate limit info in headers
  legacyHeaders: false, // disable old X-RateLimit headers
});

app.post("/send-email", emailLimiter, async (req, res) => {
  const { name, email, message, honeypot } = req.body;

  // ✅ Honeypot
  if (honeypot) {
    console.warn("🛑 Spam bot detected! Request blocked.");
    return res.status(400).json({ success: false, message: "Spam detected!" });
  }

  const data = {
    apikey: ELASTIC_API_KEY,
    subject: `New Contact from BHAKTA WEB, customer ${name}`,
    from: ELASTIC_FROM_EMAIL,
    to: "bhaktabuilders@gmail.com", // Replace with your email
    bodyText: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    isTransactional: true,
  };

  try {
    const response = await axios.post(
      "https://api.elasticemail.com/v2/email/send",
      null,
      { params: data }
    );
    console.log("✅ Email sent:", response.data);
    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error(
      "❌ Email Sending Error:",
      error.response?.data || error.message
    );
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
