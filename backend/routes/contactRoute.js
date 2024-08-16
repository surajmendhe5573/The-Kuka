const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();
const router = express.Router();

// In-memory storage for contact form submissions (Replace with a database in production)
let contactSubmissions = [];

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Route to handle contact form submission
router.post("/contact", (req, res) => {
  const { name, email, phone, message } = req.body;

  // Validate input data
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Save the contact form data
  contactSubmissions.push({ name, email, phone, message });

  // Email options for the site admin
  const adminMailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  // Email options for the client confirmation
  const clientMailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Contact Form Submission Received",
    text: `Hi ${name},\n\nThank you for reaching out! We have received your message and will get back to you shortly.\n\nYour message:\n${message}\n\nBest regards,\nYour Company Name`,
  };

  // Send email to the site admin
  transporter.sendMail(adminMailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email to admin:", error);
      return res.status(500).json({ error: "Failed to send email to admin" });
    }

    // Send confirmation email to the client
    transporter.sendMail(clientMailOptions, (error, info) => {
      if (error) {
        console.error("Error sending confirmation email to client:", error);
        return res
          .status(500)
          .json({ error: "Failed to send confirmation email" });
      }

      console.log("Emails sent: " + info.response);
      res.status(200).json({ message: "Email sent successfully" });
    });
  });
});

// Route to retrieve contact form submissions
router.get("/contact", (req, res) => {
  res.status(200).json(contactSubmissions);
});

module.exports = router;
