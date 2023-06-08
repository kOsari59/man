var express = require('express');
const { check } = require('../config/api');
var router = express.Router();
const schedule = require('node-schedule');

const mysql = require(__dirname + '/../config/runQerr');

//로그 설정
const logger = require(__dirname + '/../config/winton');

//아두이노 메인 데이터
router.get('/:api/bath/:id', async function (req, res, next) {
  logger.info('get web/:api/bath/:id');
  let {
    id,
    api
  } = req.params;
  if (check(api)) {
    sql_staring = 'select * from bath where id = ';
    sql_staring += id;
    let result = await mysql(sql_staring);
    res.send(result);
  }
  else {
    res.send("실패");
  }
});

//아두이노 상세 데이터
router.get('/:api/bath_info/:id', async function (req, res, next) {
  logger.info('get web/:api/bath_info/:id');
  let {
    id,
    api
  } = req.params;
  if (check(api)) {
    sql_staring = 'select * from bath_info where bathid = ';
    sql_staring += id;
    let result = await mysql(sql_staring);
    res.send(result);
  }
  else {
    res.send("실패");
  }
});


//예약 설정
router.post('/:api/schedule', async function (req, res, next) {
  logger.info('post web/:api/schedule');
  let {
    api
  } = req.params;

  let userid = req.body.userid;
  let bathid = req.body.bathid;
  let temp = req.body.temp;
  let waterlevel = req.body.waterlevel;
  let cleantime = req.body.cleantime;
  let start_time = req.body.start_time;
  if (check(api)) {

  let date = new Date(start_time);
  schedule.scheduleJob(date, async function() {
    sql_staring = 'insert into control values(null,';
      sql_staring += userid + ',';
      sql_staring += bathid + ',';
      sql_staring += '0,';
      sql_staring += '0,';
      sql_staring += '0,';
      sql_staring += cleantime + ',';
      sql_staring += temp +',';
      sql_staring += waterlevel;
      sql_staring += ',default); ';
      let result = await mysql(sql_staring);
  });




    sql_staring = 'insert into schedule values(null,';
    sql_staring += userid + ',';
    sql_staring += bathid + ',';
    sql_staring += temp + ',';
    sql_staring += waterlevel + ',';
    sql_staring += cleantime + ',';
    sql_staring += '\'' + start_time + '\'';
    sql_staring += ',default); ';
    let result = await mysql(sql_staring);
    res.send(result);
  }
  else {
    res.send("실패");
  }
});

//컨트롤
router.post('/:api/control', async function ( req, res, next) {
  logger.info('post web/:api/control');
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
      sql_staring = 'insert into control values(null,';
      sql_staring += userid + ',';
      sql_staring += bathid + ',';
      sql_staring += cap + ',';
      sql_staring += hvalve + ',';
      sql_staring += cvalve + ',';
      sql_staring += cleantime;
      sql_staring += ',default,default';
      sql_staring += ',default); ';

      let result = await mysql(sql_staring);
      res.send(result);

    }
    else {
      res.send("실패");
    }
});


//아두이노 기록 최신 데이터
router.get('/:api/history/:id', async function (req, res, next) {
  logger.info('get web/:api/history/:id');
  let {
    id,
    api
  } = req.params;
  if (check(api)) {
    sql_staring = 'select * from User_History where user_id = ';
    sql_staring += id;
    sql_staring += ' order by date desc limit 1'
    let result = await mysql(sql_staring);
    res.send(result);
  }
  else {
    res.send("실패");
  }
});

//아두이노 기록 모든 데이터
router.get('/:api/history_all/:id', async function (req, res, next) {
  logger.info('get web/:api/history/:id');
  let {
    id,
    api
  } = req.params;
  if (check(api)) {
    sql_staring = 'select * from User_History where user_id = ';
    sql_staring += id;
    let result = await mysql(sql_staring);
    res.send(result);
  }
  else {
    res.send("실패");
  }
});

module.exports = router;
