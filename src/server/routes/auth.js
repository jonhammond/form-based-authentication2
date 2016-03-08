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

module.exports = router;

// var pass = 'momoneynoproblems';
// var salt = bcrypt.genSaltSync(10);
// var hash = bcrypt.hashSync(pass, salt);