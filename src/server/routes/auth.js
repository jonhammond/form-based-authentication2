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

  res.render('index', { title: 'Auth', result: undefined });
});

module.exports = router;
