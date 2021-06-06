const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const authRoutes = require('./routes/auth-routes.js');
const passportService = require('./config/passport-service.js');

const app = express();

app.use('/', serveStatic(path.join(__dirname, '/dist')));
app.use('/auth', authRoutes);

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
	res.sendFile(path.join(__dirname, '/dist/index.html'));
})

const port = process.env.PORT || 8080
app.listen(port)
console.log(`app is listening on port: ${port}`);