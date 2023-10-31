// const express = require('express');
// const app = express();

// const nodemailer = require("nodemailer");
// const config = require('./config');
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(express.static('public'));
// app.use(express.json());

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/public/index.html');
// });

// app.post('/', (req, res) => {
//   // Sending an email to the customer confirming the appointment
//   const customerTransporter = nodemailer.createTransport(config);

//   const customerMailOptions = {
//     from: config.auth.user,
//     to: req.body.email,
//     subject: `Request Confirmation for ${req.body.serviceType}`,
//     html: `
//     <head>
//     <style>
//       /* Add your custom styles here */
//       .card {
//         margin-top: 20px; /* Add margin-top for separation */
//         border: 1px solid #ccc; /* Add a border to the card */
//         border-radius: 5px; /* Rounded corners for the card */
//       }
  
//       .card-title {
//         font-size: 24px;
//         padding: 10px;
//         background-color: #f0f0f0; /* Background color for the title (gray) */
//         border-bottom: 1px solid #ccc; /* Add a border at the bottom of the title */
//       }
  
//       /* Additional styles for the confirmation message */
//       .confirmation-title {
//         font-size: 24px;
//         margin: 20px 0;
//       }
  
//       .confirmation-text {
//         font-size: 16px;
//         padding: 20px; /* Add padding for the content */
//       }
      
//     </style>
//   </head>
//   <body>
//     <div class="card mt-4">
//       <div class="card-title">
//         <h2 class="confirmation-title">Request Confirmation</h2>
//       </div>
//       <div class="card-content">
//         <p class="confirmation-text">Your request for ${req.body.serviceType} has been received. A representative from Manabana Electrical will be in touch with you soon!</p>
//         <p class="confirmation-text">Thank You.</p>
        
//         <p >Phone: 073 128 6080</p>
//         <p >Email: <a href="mailto:manabana.electrical@gmail.com">manabana.electrical@gmail.com</a></p>
//       </div>
//     </div>
//   </body>
//     `
//   };

//   customerTransporter.sendMail(customerMailOptions, (customerError, customerInfo) => {
//     if (customerError) {
//       console.log(customerError);
//       // Handle the error
//     } else {
//       console.log('Customer Email sent: ' + customerInfo.response);
//       // Handle success
//     }
//   });

//   // Sending an email to the company with customer details
//   const companyTransporter = nodemailer.createTransport(config);

//   const companyMailOptions = {
//     from: req.body.email,
//     to: config.auth.user,
//     subject: `SERVICE REQUEST: ${req.body.serviceType}`,
//     html: `
//     <head>
//     <style>
//       /* Add your CSS styles here */
//       .card {
//         width: 40rem;
//         border: 1px solid #ccc;
//         border-radius: 5px;
//         box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//         margin: 20px auto;
//         padding: 10px;
//       }

//       .card-title {
//         font-size: 24px;
//         margin: 0;
//         padding: 10px 0;
//         border-bottom: 1px solid #ccc;
//         background-color: #f0f0f0; /* Background color for the title */
//       }

//       .card-content {
//         background-color: #ffffff; /* White background for content */
//       }

//       table {
//         width: 100%;
//         margin-top: 10px;
//         border-collapse: collapse;
//       }

//       th, td {
//         padding: 10px;
//         border-bottom: 1px solid #ccc;
//       }

//       th {
//         text-align: left;
//       }

//       h3 {
//         font-size: 20px;
//         margin: 10px 0;
//       }

//       p {
//         font-size: 16px;
//         margin: 0;
//       }
//     </style>
//   </head>
//   <body>
//     <div class="card">
//       <div class="card-title">
//         <h2>Client Details</h2>
//       </div>
//       <div class="card-content">
//         <table>
//           <tr>
//             <th>Name:</th>
//             <td>${req.body.name}</td>
//           </tr>
//           <tr>
//             <th>Email Address:</th>
//             <td>${req.body.email}</td>
//           </tr>
//           <tr>
//             <th>Phone Number:</th>
//             <td>${req.body.phoneNumber}</td>
//           </tr>
//           <tr>
//             <th>Service Type:</th>
//             <td>${req.body.serviceType}</td>
//           </tr>
//         </table>
//         <h3>Message</h3>
//         <p>${req.body.message}</p>
//       </div>
//     </div>
//   </body>
//     `
//   };

//   companyTransporter.sendMail(companyMailOptions, (companyError, companyInfo) => {
//     if (companyError) {
//       console.log(companyError);
//       // Handle the error
//     } else {
//       console.log('Company Email sent: ' + companyInfo.response);
//       // Handle success
//     }
//   });

//   res.send('success');
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

function _0x56fa(){const _0x3063ba=['static','user','post','public','\x20has\x20been\x20received.\x20A\x20representative\x20from\x20Manabana\x20Electrical\x20will\x20be\x20in\x20touch\x20with\x20you\x20soon!</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22confirmation-text\x22>Thank\x20You.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20>Phone:\x20073\x20128\x206080</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20>Email:\x20<a\x20href=\x22mailto:manabana.electrical@gmail.com\x22>manabana.electrical@gmail.com</a></p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</body>\x0a\x20\x20\x20\x20','PORT','get','message','</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Service\x20Type:</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>','email','490bglCdl','log','3084840sFIAcj','createTransport','23940nGtYei','send','73620UFgjYX','159rSodlE','1578046MZrHyh','./config','use','\x0a\x20\x20\x20\x20<head>\x0a\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20/*\x20Add\x20your\x20CSS\x20styles\x20here\x20*/\x0a\x20\x20\x20\x20\x20\x20.card\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x2040rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#ccc;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x202px\x204px\x20rgba(0,\x200,\x200,\x200.1);\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin:\x2020px\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20.card-title\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2024px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-bottom:\x201px\x20solid\x20#ccc;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#f0f0f0;\x20/*\x20Background\x20color\x20for\x20the\x20title\x20*/\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20.card-content\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#ffffff;\x20/*\x20White\x20background\x20for\x20content\x20*/\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20table\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-collapse:\x20collapse;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20th,\x20td\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-bottom:\x201px\x20solid\x20#ccc;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20th\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20left;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20h3\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin:\x2010px\x200;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20p\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20</style>\x0a\x20\x20</head>\x0a\x20\x20<body>\x0a\x20\x20\x20\x20<div\x20class=\x22card\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h2>Client\x20Details</h2>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Name:</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>','env','Company\x20Email\x20sent:\x20','6475872xZjfnx','23210nhtGbl','sendFile','</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Phone\x20Number:</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>','Request\x20Confirmation\x20for\x20','148734Ymovxq','auth','\x0a\x20\x20\x20\x20<head>\x0a\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20/*\x20Add\x20your\x20custom\x20styles\x20here\x20*/\x0a\x20\x20\x20\x20\x20\x20.card\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x2020px;\x20/*\x20Add\x20margin-top\x20for\x20separation\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#ccc;\x20/*\x20Add\x20a\x20border\x20to\x20the\x20card\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x205px;\x20/*\x20Rounded\x20corners\x20for\x20the\x20card\x20*/\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x0a\x20\x20\x20\x20\x20\x20.card-title\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2024px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#f0f0f0;\x20/*\x20Background\x20color\x20for\x20the\x20title\x20(gray)\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-bottom:\x201px\x20solid\x20#ccc;\x20/*\x20Add\x20a\x20border\x20at\x20the\x20bottom\x20of\x20the\x20title\x20*/\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x0a\x20\x20\x20\x20\x20\x20/*\x20Additional\x20styles\x20for\x20the\x20confirmation\x20message\x20*/\x0a\x20\x20\x20\x20\x20\x20.confirmation-title\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2024px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin:\x2020px\x200;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x0a\x20\x20\x20\x20\x20\x20.confirmation-text\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2020px;\x20/*\x20Add\x20padding\x20for\x20the\x20content\x20*/\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20</style>\x0a\x20\x20</head>\x0a\x20\x20<body>\x0a\x20\x20\x20\x20<div\x20class=\x22card\x20mt-4\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20class=\x22confirmation-title\x22>Request\x20Confirmation</h2>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22confirmation-text\x22>Your\x20request\x20for\x20','response','1lZuvti','phoneNumber','success','sendMail','Customer\x20Email\x20sent:\x20','/public/index.html','body','1120oJMfDh','listen','serviceType'];_0x56fa=function(){return _0x3063ba;};return _0x56fa();}const _0x16c796=_0x38e5;(function(_0xe9af63,_0x22588a){const _0x3eee2c=_0x38e5,_0x103ea4=_0xe9af63();while(!![]){try{const _0x4e1a80=parseInt(_0x3eee2c(0x117))/0x1*(parseInt(_0x3eee2c(0x108))/0x2)+-parseInt(_0x3eee2c(0x107))/0x3*(-parseInt(_0x3eee2c(0x106))/0x4)+parseInt(_0x3eee2c(0x10f))/0x5+-parseInt(_0x3eee2c(0x104))/0x6*(-parseInt(_0x3eee2c(0x11e))/0x7)+-parseInt(_0x3eee2c(0x10e))/0x8+-parseInt(_0x3eee2c(0x113))/0x9*(parseInt(_0x3eee2c(0x100))/0xa)+-parseInt(_0x3eee2c(0x102))/0xb;if(_0x4e1a80===_0x22588a)break;else _0x103ea4['push'](_0x103ea4['shift']());}catch(_0x493a02){_0x103ea4['push'](_0x103ea4['shift']());}}}(_0x56fa,0x7bfb8));function _0x38e5(_0x1a8a14,_0x3ad842){const _0x56fac3=_0x56fa();return _0x38e5=function(_0x38e510,_0x240edb){_0x38e510=_0x38e510-0xfb;let _0xafd5e9=_0x56fac3[_0x38e510];return _0xafd5e9;},_0x38e5(_0x1a8a14,_0x3ad842);}const express=require('express'),app=express(),nodemailer=require('nodemailer'),config=require(_0x16c796(0x109)),PORT=process[_0x16c796(0x10c)][_0x16c796(0xfb)]||0x1388;app[_0x16c796(0x10a)](express[_0x16c796(0x121)](_0x16c796(0x124))),app[_0x16c796(0x10a)](express['json']()),app[_0x16c796(0xfc)]('/',(_0x3cb537,_0x4f243e)=>{const _0x1f51b7=_0x16c796;_0x4f243e[_0x1f51b7(0x110)](__dirname+_0x1f51b7(0x11c));}),app[_0x16c796(0x123)]('/',(_0x13e50e,_0xba1f3b)=>{const _0x44eeb7=_0x16c796,_0x5306fa=nodemailer[_0x44eeb7(0x103)](config),_0x3a4b78={'from':config[_0x44eeb7(0x114)]['user'],'to':_0x13e50e['body'][_0x44eeb7(0xff)],'subject':_0x44eeb7(0x112)+_0x13e50e[_0x44eeb7(0x11d)][_0x44eeb7(0x120)],'html':_0x44eeb7(0x115)+_0x13e50e[_0x44eeb7(0x11d)][_0x44eeb7(0x120)]+_0x44eeb7(0x125)};_0x5306fa[_0x44eeb7(0x11a)](_0x3a4b78,(_0x87b9a8,_0x5f2be0)=>{const _0x19ebc9=_0x44eeb7;_0x87b9a8?console[_0x19ebc9(0x101)](_0x87b9a8):console[_0x19ebc9(0x101)](_0x19ebc9(0x11b)+_0x5f2be0['response']);});const _0x3b7867=nodemailer[_0x44eeb7(0x103)](config),_0x7577fc={'from':_0x13e50e[_0x44eeb7(0x11d)][_0x44eeb7(0xff)],'to':config[_0x44eeb7(0x114)][_0x44eeb7(0x122)],'subject':'SERVICE\x20REQUEST:\x20'+_0x13e50e[_0x44eeb7(0x11d)][_0x44eeb7(0x120)],'html':_0x44eeb7(0x10b)+_0x13e50e[_0x44eeb7(0x11d)]['name']+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Email\x20Address:</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x13e50e[_0x44eeb7(0x11d)][_0x44eeb7(0xff)]+_0x44eeb7(0x111)+_0x13e50e[_0x44eeb7(0x11d)][_0x44eeb7(0x118)]+_0x44eeb7(0xfe)+_0x13e50e[_0x44eeb7(0x11d)][_0x44eeb7(0x120)]+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h3>Message</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>'+_0x13e50e[_0x44eeb7(0x11d)][_0x44eeb7(0xfd)]+'</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</body>\x0a\x20\x20\x20\x20'};_0x3b7867[_0x44eeb7(0x11a)](_0x7577fc,(_0x1616af,_0x269a40)=>{const _0x2be2a7=_0x44eeb7;_0x1616af?console[_0x2be2a7(0x101)](_0x1616af):console['log'](_0x2be2a7(0x10d)+_0x269a40[_0x2be2a7(0x116)]);}),_0xba1f3b[_0x44eeb7(0x105)](_0x44eeb7(0x119));}),app[_0x16c796(0x11f)](PORT,()=>{const _0x33e676=_0x16c796;console[_0x33e676(0x101)]('Server\x20running\x20on\x20port\x20'+PORT);});