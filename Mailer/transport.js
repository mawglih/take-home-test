const nodemailer = require('nodemailer');
const config = require('../config/config-mail');

const transport = {
  pool: true,
  host: 'mail.oleg-dev.com',
  secure: true,
  auth: {
    user: config.USER,
    pass: config.PASS,
  },
  port: 465,
  tls: {
    rejectUnauthorized: false
  },
  crossdomain:true
};

const transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});
