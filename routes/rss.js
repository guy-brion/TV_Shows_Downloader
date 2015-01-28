var express = require('express');
var router = express.Router();

var https = require('https');

/* GET RSS feed. */
router.get('/update', function (req, res, next) {
  https.get('https://kickass.so/tv/?rss=1', function (res) {
    console.log("statusCode: ", res.statusCode);
    console.log("headers: ", res.headers);

    var data = [];

    res.on('data', function (d) {
      data.push(d);
    });
  }).on('error', function (e) {
    console.error(e);
  }).on('close', function () {
    console.log(data.join(''));
  });
});

module.exports = router;
