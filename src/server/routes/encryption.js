var express = require('express');
var router = express.Router();
var md5 = require('md5');
var bcrypt = require('bcrypt');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Encryption', result: undefined });
});

router.get('/md5', function(req, res, next) {
  var pass = 'password';
  var result = md5(pass);
  res.render('index', { title: 'Encryption', result: result });
});

router.get('/salt', function(req, res, next) {
  var salt = bcrypt.genSaltSync(10);
  var result = salt;
  res.render('index', { title: 'Encryption', result: result });
});

router.get('/hash', function(req, res, next) {
  var pass = 'bacon';
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(pass, salt);
  res.render('index', { title: 'Encryption', result: hash });
});

router.get('/compare', function(req, res, next) {
  var pass = 'bacon';
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(pass, salt);
  var comp = bcrypt.compareSync(pass, hash);
  res.render('index', { title: 'Encryption', result: comp });
});



module.exports = router;
