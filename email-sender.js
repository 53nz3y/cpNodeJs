const nodemailer = require("nodemailer");

const message = {
  from: "sender@server.com",
  to: "receiver@example.com",
  subject: "Hello World",
  text: "This is the plaintext version of the email.",
  html: "<p>This is the <strong>HTML version</strong> of the email.</p>",
};
console.log(message);