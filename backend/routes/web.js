var express = require('express');
const { check } = require('../config/api');
var router = express.Router();

var db_config = require(__dirname + '/../config/database.js');
var connection = db_config.init();
db_config.connect(connection);


//아두이노 메인 데이터
router.get('/:api/bath/:id', function (req, res, next) {
  let {
    id,
    api
  } = req.params;
  if (check(api)) {
    sql_staring = 'select * from bath where id = ';
    sql_staring += id;
    connection.query(sql_staring, (error, rows, fields) => {
      res.send(rows);
    });
  }
  else {
    res.send("실패");
  }
});

//아두이노 모든 데이터
router.get('/:api/bath_info/:id', function (req, res, next) {
  let {
    id,
    api
  } = req.params;
  if (check(api)) {
    sql_staring = 'select * from bath_info where bathid = ';
    sql_staring += id;
    connection.query(sql_staring, (error, rows, fields) => {
      res.send(rows);
    });
  }
  else {
    res.send("실패");
  }
});


//예약 설정
router.post('/:api/schedule', function (req, res, next) {

  let {
    api
  } = req.params;

  let userid = req.body.userid;
  let bathid = req.body.bathid;
  let temp = req.body.temp;
  let waterlevel = req.body.waterlevel;
  let cleantime = req.body.cleantime;
  let starttime = req.body.starttime;
  if (check(api)) {

    connection.query("insert into schedule values(null,?,?,?,?,?,?); ", [
      userid,bathid,temp,waterlevel,cleantime,starttime
    ], (error, rows, fields) => {
      if (error) {
        console.log(error);
      }
      res.send(rows);
    })
  }
  else {
    res.send("실패");
  }
});

//컨트롤
router.post('/:api/control', function (req, res, next) {

  let {
    api
  } = req.params;

  let userid = req.body.userid;
  let bathid = req.body.bathid;
  let cap = req.body.cap;
  let hvalve = req.body.hvalve;
  let cvalve = req.body.cvalve;
  let cleantime = req.body.cleantime;
  if (check(api)) {
    connection.query("insert into control values(null,?,?,?,?,?,?); ", 
    [userid,bathid,cap,hvalve,cvalve,cleantime], (error, rows, fields) => {
      if (error) {
        console.log(error);
      }
      res.send(rows);
    })
  }
  else {
    res.send("실패");
  }
});


//아두이노 모든 데이터
router.get('/:api/history/:id', function (req, res, next) {
  let {
    id,
    api
  } = req.params;
  if (check(api)) {
    sql_staring = 'select * from User_History where user_id = ';
    sql_staring += id;
    connection.query(sql_staring, (error, rows, fields) => {
      res.send(rows);
    });
  }
  else {
    res.send("실패");
  }
});


module.exports = router;
