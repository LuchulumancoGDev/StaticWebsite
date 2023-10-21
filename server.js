const express = require('express');
const app = express();

const nodemailer = require("nodemailer");
const config = require('./config');
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.static('public'));
app.use(express.json());


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/', (req, res) => {
  debugger
  console.log(req.body);

  const transporter = nodemailer.createTransport(config);

  const mailOptions = {
    from: req.body.email,
    to: config.auth.user,
    subject: `SERVICE REQUEST: ${req.body.serviceType}`,
    html: `
      <h2>Client Details</h2>
      <table  style="text-align: left;">
        <tr>
          <th>Name:</th>
          <td>${req.body.name}</td>
        </tr>
        <tr>
          <th>Email Address:</th>
          <td>${req.body.email}</td>
        </tr>
        <tr>
          <th>Phone Number:</th>
          <td>${req.body.phoneNumber}</td>
        </tr>
        <tr>
          <th>Service Type:</th>
          <td>${req.body.serviceType}</td>
        </tr>
      </table>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `
  };
  
  
  

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
     
      res.send('error');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('success');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


