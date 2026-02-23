require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const { Resend } = require("resend");

const app = express();
app.use(cors({
  origin: "https://engineer-s-mentor.vercel.app",
  methods: ["GET", "POST"],
}));
app.use(express.json());

const upload = multer({ dest: "uploads/" });

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/send-email", upload.single("abstract"), async (req, res) => {
  try {
    const { name, email, phone, projectTitle, message, curious } = req.body;

    await resend.emails.send({
      from: "onboarding@resend.dev",   // default Resend sender (works instantly)
      to: "engineersmentorservices@gmail.com",
      subject: "New Project Inquiry",
      html: `
        <h2>New Submission</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "Not Provided"}</p>
        <p><b>Project Title:</b> ${projectTitle || "Not Provided"}</p>

        <p><b>Message:</b></p>
        <p>${(message || "Not Provided").replace(/\n/g, "<br/>")}</p>

        <p><b>Curious About:</b></p>
        <p>${curious || "Not Provided"}</p>
      `,
    });

    res.json({
      success: true,
      message: "Email sent successfully ✅",
    });
  } catch (err) {
    console.error("FULL ERROR →", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running"));