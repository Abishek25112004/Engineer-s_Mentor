require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const axios = require("axios");
const { Resend } = require("resend");

const app = express();

app.use(cors({
  origin: "https://engineer-s-mentor.vercel.app",
  methods: ["GET", "POST"],
}));

app.use(express.json());

const upload = multer({ dest: "uploads/" });

const resend = new Resend(process.env.RESEND_API_KEY);

/* GOOGLE APPS SCRIPT WEB APP URL */
const GOOGLE_SCRIPT_URL = "PASTE_YOUR_SCRIPT_URL_HERE";

app.post("/send-email", upload.single("abstract"), async (req, res) => {
  try {

    const { name, email, phone, projectTitle, message, curious } = req.body;

    let attachments = [];

    if (req.file) {
      const fileBuffer = fs.readFileSync(req.file.path);

      attachments.push({
        filename: req.file.originalname,
        content: fileBuffer,
      });
    }

    /* SEND EMAIL */
    await resend.emails.send({
      from: "onboarding@resend.dev",
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
      attachments: attachments,
    });

    /* SEND DATA TO GOOGLE SHEETS */
    await axios.post("https://script.google.com/macros/s/AKfycbzWfBeKnTlNzuSTU7gtgmpq4BohTZ6gOPF7CIxyNf06UHMpFSCitUgguP2BG_tJzRo_/exec", {
      name,
      email,
      phone,
      projectTitle,
      message,
      curious,
      fileName: req.file ? req.file.originalname : "No File",
      date: new Date()
    });

    /* DELETE TEMP FILE */
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }

    res.json({
      success: true,
      message: "Email sent and data stored in Google Sheets ✅",
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
app.listen(PORT, () => console.log("Server running on port " + PORT));