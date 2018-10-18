import nodemailer from 'nodemailer';
import config from '../config';

const transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: config.USER,
    pass: config.PASS,
  },
};

const transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

export default transporter;