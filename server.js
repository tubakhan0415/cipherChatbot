const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Nodemailer setup (use your own credentials here)
const transporter = nodemailer.createTransport({
  host: "smtp.andwebtech.com", // Replace with your SMTP server
  port: 587, // Use the appropriate port (587 for TLS)
  secure: false, // False for TLS
  auth: {
    user: "tuba@andwebtech.com", // Your email address
    pass: "Tuba@201224", // Your email password
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Handle form submission and send email
app.post("/send-email", (req, res) => {
  const { name, email, phone } = req.body;

  const mailOptions = {
    from: "tuba@andwebtech.com", // Sender's email
    to: "tuba@andwebtech.com", // Recipient's email
    subject: "New Registration Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}`, // Email body with form data
  };

  // Send the email using Nodemailer
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send("Error in sending email");
    }
    console.log("Email sent: " + info.response);
    res.status(200).send("Email sent successfully");
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
