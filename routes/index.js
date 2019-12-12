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
  res.render('Day3/page', {
    pagetitle : "Client info", 
    headers: JSON.stringify(req.headers), 
    host : req.headers['host'] ? req.headers['host'] : "none",
    useragent: req.headers['user-agent'] ? req.headers['user-agent'] :"none", 
    ipaddress :  requestIp.getClientIp(req), 
    language : req.headers['accept-language'] ? req.headers['accept-language'] :"none",
    encoding : req.headers['accept-encoding'] ? req.headers['accept-encoding'] :"none",
    referer : req.headers['referer'] ? req.headers['referer'] :"none",
    proxy : req.headers['via'] ? req.headers['via'] : "none"});
});
module.exports = router;