const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieSession = require('cookie-session');
const passport = require('passport');

const authRoutes = require('./routes/auth-routes.js');
const apiRoutes = require('./routes/api-routes.js');
const passportService = require('./config/passport-service.js');
const keys = require('./config/keys');

const app = express();

mongoose.connect(keys.database.URL, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
}, () => { 
  console.log('* Sudoku app is successfully connected to MongoDB.')
});

app.use(cookieSession({ maxAge: 12 * 3600000, keys: [keys.cookieSession.key] }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/api', apiRoutes);
app.use('/', express.static(path.join(__dirname, '/dist')));

const port = process.env.PORT || 8080;

app.listen(port)

console.log(`* Sudoku app is listening on port: ${port}`);