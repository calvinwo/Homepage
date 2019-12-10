var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { pagetitle: 'Homepage' });
}).get('/day2', function(req, res, next) {
  res.render('Day2/page', {pagetitle: 'Pug example'});
});

module.exports = router;