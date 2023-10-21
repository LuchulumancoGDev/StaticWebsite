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
  // Sending an email to the customer confirming the appointment
  const customerTransporter = nodemailer.createTransport(config);

  const customerMailOptions = {
    from: config.auth.user,
    to: req.body.email,
    subject: `Request Confirmation for ${req.body.serviceType}`,
    html: `
    <head>
    <style>
      /* Add your custom styles here */
      .card {
        margin-top: 20px; /* Add margin-top for separation */
        border: 1px solid #ccc; /* Add a border to the card */
        border-radius: 5px; /* Rounded corners for the card */
      }
  
      .card-title {
        font-size: 24px;
        padding: 10px;
        background-color: #f0f0f0; /* Background color for the title (gray) */
        border-bottom: 1px solid #ccc; /* Add a border at the bottom of the title */
      }
  
      /* Additional styles for the confirmation message */
      .confirmation-title {
        font-size: 24px;
        margin: 20px 0;
      }
  
      .confirmation-text {
        font-size: 16px;
        padding: 20px; /* Add padding for the content */
      }
      
    </style>
  </head>
  <body>
    <div class="card mt-4">
      <div class="card-title">
        <h2 class="confirmation-title">Request Confirmation</h2>
      </div>
      <div class="card-content">
        <p class="confirmation-text">Your request for ${req.body.serviceType} has been received. A representative from Manabana Electrical will be in touch with you soon!</p>
        <p class="confirmation-text">Thank You.</p>
        
        <p >Phone: 073 128 6080</p>
        <p >Email: <a href="mailto:manabana.electrical@gmail.com">manabana.electrical@gmail.com</a></p>
      </div>
    </div>
  </body>
    `
  };

  customerTransporter.sendMail(customerMailOptions, (customerError, customerInfo) => {
    if (customerError) {
      console.log(customerError);
      // Handle the error
    } else {
      console.log('Customer Email sent: ' + customerInfo.response);
      // Handle success
    }
  });

  // Sending an email to the company with customer details
  const companyTransporter = nodemailer.createTransport(config);

  const companyMailOptions = {
    from: req.body.email,
    to: config.auth.user,
    subject: `SERVICE REQUEST: ${req.body.serviceType}`,
    html: `
    <head>
    <style>
      /* Add your CSS styles here */
      .card {
        width: 40rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        margin: 20px auto;
        padding: 10px;
      }

      .card-title {
        font-size: 24px;
        margin: 0;
        padding: 10px 0;
        border-bottom: 1px solid #ccc;
        background-color: #f0f0f0; /* Background color for the title */
      }

      .card-content {
        background-color: #ffffff; /* White background for content */
      }

      table {
        width: 100%;
        margin-top: 10px;
        border-collapse: collapse;
      }

      th, td {
        padding: 10px;
        border-bottom: 1px solid #ccc;
      }

      th {
        text-align: left;
      }

      h3 {
        font-size: 20px;
        margin: 10px 0;
      }

      p {
        font-size: 16px;
        margin: 0;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <div class="card-title">
        <h2>Client Details</h2>
      </div>
      <div class="card-content">
        <table>
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
      </div>
    </div>
  </body>
    `
  };

  companyTransporter.sendMail(companyMailOptions, (companyError, companyInfo) => {
    if (companyError) {
      console.log(companyError);
      // Handle the error
    } else {
      console.log('Company Email sent: ' + companyInfo.response);
      // Handle success
    }
  });

  res.send('success');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
