var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sessions', result: undefined });
});

router.get('/set', function(req, res, next) {
  req.session.user = {username: "Jon", id: '11'};

  var result = JSON.stringify(req.session);

  res.render('index', { title: 'Sessions', result: result });
});

router.get('/get-username', function(req, res, next) {
  req.session.user = {username: "Jon", id: '11'};

  var result = JSON.stringify(req.session);

  res.render('index', { title: 'Sessions', result: req.session.username });
});

router.get('/get-id', function(req, res, next) {
  req.session.user = {username: "Jon", id: '11'};

  var result = JSON.stringify(req.session);

  res.render('index', { title: 'Sessions', result: req.session.user.id });
});

module.exports = router;
