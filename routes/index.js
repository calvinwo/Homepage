var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { pagetitle: 'Homepage' });
}).get('/day2', function(req, res, next) {
  res.render('Day2/page', {pagetitle: 'Messing around with pug'});
})
.get('/day3', function(req, res, next) {
  var clientIPaddr = null,
  clientProxy = null;
  
  // is client going through a proxy?
  if (req.headers['via']) { // yes
    clientIPaddr = req.headers['x-forwarded-for'];
    clientProxy = req.headers['via'];
  } else { // no
    clientIPaddr = req.connection.remoteAddress;
    clientProxy = "none";
  }

  res.render('Day3/page', {pagetitle : "Client info", useragent: req.headers['user-agent'], ipaddress :  clientIPaddr, proxy : clientProxy});
});
module.exports = router;