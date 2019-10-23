const express = require('express');
const mysql = require("mysql");
const setting = require('../modules/db.setting');
const router = express.Router();

let conn = mysql.createConnection({
  host     : setting.host,
  user     : setting.user,
  password : setting.password,
  database : setting.database
});

/* GET home page. */
router.put('/:id', (req, res, next) => {
  conn.query(`UPDATE data SET madisonSquare=${conn.escape(req.body.madisonSquare)}, restaurant=${conn.escape(req.body.restaurant)}, stores = ${conn.escape(req.body.stores)}, church = ${conn.escape(req.body.church)} WHERE id = ${req.params.id}`);
  res.sendStatus(200);
});

router.get('/', (req, res, next) => {
  conn.query("SELECT * FROM data", (err, result, fields) => {
    res.send(result);
  })
});

module.exports = router;
