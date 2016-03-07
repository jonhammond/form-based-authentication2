var express = require('express');
var router = express.Router();
// var cookieParser = require('cookie-parser');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cookies', result: undefined });
});

router.get('/set', function(req, res, next) {
  var name = req.query.cookie || 'sugar';
  var rate = req.query.rating || 0;
  res.cookie('chocolateChip', 8);
  var result = JSON.stringify(req.cookies);
  res.render('index', { title: 'Cookies', result: result });
});

router.get('/clear', function(req, res, next) {
  for (var name in req.cookies) {
    res.clearCookie(name);
    }
  var result = JSON.stringify(req.cookies);
  res.render('index', { title: 'Cookies', result: result });
});

router.get('/set-secret', function(req, res, next) {
  res.cookie('secret-cookie', 'i am a secret', {
    httpOnly: true,
    secure: true,
    signed: true
  });
  var result = JSON.stringify(req.signedCookies);
  res.render('index', { title: 'Cookies', result: result });
});

module.exports = router;
