const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodeMailer = require('nodemailer');
const config = functions.config();
const cors = require('cors')({ orgin: true });
admin.initializeApp();

const transporter = nodeMailer.createTransport({
  service: 'Gmail',
  auth: {
    user: config.user.email,
    password: config.user.password
  }
});

let mailOptions = {
  from: 'Arc Development',
  to: 'nikhil.shrestha1995@gmail.com',
  subject: 'testing node mailer',
  text: 'test sucessful'
};

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.sendMail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    transporter.sendMail(mailOptions, error => {
      if (error) {
        response.send(error);
      } else {
        response.send('Message sent successfully');
      }
    });
  });
});
