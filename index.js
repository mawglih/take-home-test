const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const items = require('./items');
const websites = require('./websites');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = 8080;
const transporter = require('./Mailer/transport');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

io.on('connection', (client) => {
	client.on('subscribeToTimer', (interval) => {
		console.log('client is subscribing with interval ', interval);
		setInterval(() => {
			client.emit('timer', new Date().toString());
		}, interval);
	});
});

app.get('/get-items', (req, res) => {
	res.json(items);
});
app.get('/get-websitess', (req, res) => {
	res.json(websites);
});

app.post('/checkout', (req, res) => {
	const hasError = !req.body.items;
	let response;

	if (hasError) {
		response = {
			status: 'error',
			error: 'Invalid request.',
		};
	} else {
		response = {
			status: 'success',
			message: 'Your order was placed successfully.',
		};
	}

	res.json(response);
});

app.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${content} `

  var mail = {
    from: name,
    to: 'mawglih@gmail.com', 
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
});
// app.listen(port, () => console.log(`Server running on port ${port}`))
// console.log(`server is ready on port ${port}`)

io.listen(port);
console.log(`socket is listening ${port}!`);
