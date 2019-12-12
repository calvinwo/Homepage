var express = require('express');
var router = express.Router();
const requestIp = require('request-ip');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { pagetitle: 'Homepage' });
}).get('/day2', function(req, res, next) {
  res.render('Day2/page', {pagetitle: 'Messing around with pug'});
})
.get('/day3', function(req, res, next) {
  var clientIPaddr = null,
  clientProxy = null;
  clientIPaddr = requestIp.getClientIp(req);

  // is client going through a proxy?
  if (req.headers['via']) { // yes
    clientProxy = req.headers['via'];
  } else { // no
    clientProxy = "none";
  }
  res.render('Day3/page', {pagetitle : "Client info", useragent: JSON.stringify(req.headers), ipaddress :  clientIPaddr, proxy : clientProxy});
});
module.exports = router;