var express = require('express');
var router = express.Router();
var md5 = require('md5');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Encryption', result: undefined });
});

router.get('/md5', function(req, res, next) {
  var pass = 'simple-password';
  var result = md5(pass);
  res.render('index', { title: 'Encryption', result: result });
});

module.exports = router;
