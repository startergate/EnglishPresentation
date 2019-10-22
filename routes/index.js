var express = require('express');
let setting = require('../modules/setting');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { id: setting.gmapkey });
});

module.exports = router;
