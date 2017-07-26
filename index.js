const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config/index.json');
const cors = require('cors');

// connect to the database and load models
require('./models').connect(config.dbUri);

const app = express();

app.use(cors());

// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// pass the passport middleware
app.use(passport.initialize());

// load passport strategies
const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// routes
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

// start the server
app.listen(1234, () => {
  console.log('Server is running on http://localhost:1234 or http://127.0.0.1:1234');
});
