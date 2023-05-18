var express = require('express');
const { check } = require('../config/api');
var router = express.Router();

// const mysql = require('mysql2');
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '1234',
//   database: 'smart_bath'
// });

// connection.connect();
// //바스 정보 올리고 받기
// //스케줄 정보 받기
var db_config = require(__dirname + '/../config/database.js');
var connection = db_config.init();
db_config.connect(connection);
process.env.DATABASE_HOST


//아두이노가 예약 정보 읽어 오기 (bath_id로)
router.get('/:api/schedule/:id', function (req, res, next) {
  let {
    id,
    api
  } = req.params;

  if (check(api)) {
    sql_staring = 'select * from schedule where bathid = ';
    sql_staring += id;
    connection.query(sql_staring, (error, rows, fields) => {
      res.send(rows);
    });
  } else {
    res.send("실패");
  }

});


//아두이노가 컨트롤 읽어 오기 (bath_id로)
router.get('/:api/control/:id', function (req, res, next) {
  let {
    id,
    api
  } = req.params;

  if (check(api)) {
    sql_staring = 'select * from control where bathid = ';
    sql_staring += id;
    connection.query(sql_staring, (error, rows, fields) => {
      res.send(rows);
    });
  } else {
    res.send("실패");
  }

});



//아두이노가 상태정보 남기기
router.post('/:api/update', function (req, res, next) {
  let {
    api
  } = req.params;
  let bathid = req.body.bathid;
  let state = req.body.state;
  let temp = req.body.temp;
  let waterlevel = req.body.waterlevel;
  let cap = req.body.cap;
  let hvalve = req.body.hvalve;
  let cvalve = req.body.cvalve;
  let spkler = req.body.spkler;
  let fanonoff = req.body.fanonoff;
  let fanspeed = req.body.fanspeed;
  let heat = req.body.heat;
  let ledonoff = req.body.ledonoff;
  let ledbright = req.body.ledbright;
  let ledcolor = req.body.ledcolor;


  if (check(api)) {
    connection.query("insert into bath_info values(null,?,?,?,?,?,?,?,?,?,?,?,?,?,?,default); ", 
    [bathid, state, temp, waterlevel, cap, 
      hvalve, cvalve, spkler, fanonoff, fanspeed, 
      heat, ledonoff, ledbright, ledcolor], (error, rows, fields) => {
      if (error) {
        console.log(error);
      }
      res.send(rows);
    });
  } else {
    res.send("실패");
  }
});

module.exports = router;
