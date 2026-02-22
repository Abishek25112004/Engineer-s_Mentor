require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const multer = require("multer");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ File Upload Config
const upload = multer({ dest: "uploads/" });

// ✅ Mail Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Email Route
app.post("/send-email", upload.single("abstract"), async (req, res) => {
  try {
    const { name, email, phone, projectTitle, message, curious } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
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
      attachments: req.file
        ? [
            {
              filename: req.file.originalname,
              path: req.file.path,
            },
          ]
        : [],
    };

    await transporter.sendMail(mailOptions);

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

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running"));