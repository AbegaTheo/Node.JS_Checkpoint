const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "user_email@gmail.com",
    pass: "mot_de_passe_d'application", // Le mot de passe d'application généré
  },
});

const mailOptions = {
  from: "user_email@gmail.com",
  to: "destinataire@gmail.com",
  subject: "Test Nodemailer",
  text: "Bonjour, ceci est un test d'envoi d'email avec Node.js !",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Erreur : ", error);
  } else {
    console.log("Email envoyé : " + info.response);
  }
});
