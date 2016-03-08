var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');

var userInfo = [
  { name: 'Tony Stark', username: 'tony.stark', password: process.env.TONY_PASS }
];

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Auth', result: undefined });
});

router.get('/find-by-username', function(req, res, next) {
  var userURL = req.query.username;
  var userData;
  userInfo.forEach(function(el) {
    if(el.username === userURL) {
      userData = el;
      userData = JSON.stringify(userData);
    }
  res.render('index', { title: 'Auth', result: userData });
  });
});

router.get('/verify-password', function(req, res, next) {
  var userURL = req.query.username;
  var userData;
  var userPassword;
  userInfo.forEach(function(el) {
    if(el.username === userURL) {
      console.log('test');
      userPassword = el.password;
      console.log('password:', userPassword);
    }
    bcrypt.compare('momoneynoproblems', userPassword, function(err, data) {
      res.render('index', {
        title: 'Verify-Password',
        result: data});
    });
  });
});

module.exports = router;