var express = require('express');
const { check } = require('../config/api');
var router = express.Router();

const mysql = require(__dirname + '/../config/runQuery');

//로그 설정
const logger = require(__dirname +'/../config/winton');


//아두이노가 예약 정보 읽어 오기 (bath_id로)
router.get('/:api/schedule/:id', async function (req, res, next) {
  logger.info('get arduino/:api/schedule/:id');
  let {
    id,
    api
  } = req.params;

  if (check(api)) {
    sql_staring = 'select * from schedule where bathid = ';
    sql_staring += id;
    sql_staring +=' order by date desc limit 1'
    
    let result = await mysql(sql_staring);
    res.send(result);
  } else {
    res.send("실패");
  }

});


//아두이노가 컨트롤 읽어 오기 (bath_id로)
router.get('/:api/control/:id', async function (req, res, next) {
  logger.info('get arduino/:api/control/:id');
  let {
    id,
    api
  } = req.params;

  if (check(api)) {
    sql_staring = 'select * from control where bathid = ';
    sql_staring += id;
    sql_staring +=' order by date desc limit 1'

    let result = await mysql(sql_staring);
    res.send(result);
  }else {
    res.send("실패");
  }

});


//아두이노가 상태정보 남기기
router.post('/:api/update', async function (req, res, next) {

  logger.info('post arduino/:api/update');
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
    sql_staring = 'insert into bath_info values(null,';
    sql_staring += bathid+',';
    sql_staring += state+',';
    sql_staring += temp+',';
    sql_staring += waterlevel+',';
    sql_staring += cap+',';
    sql_staring += hvalve+',';
    sql_staring += cvalve+',';
    sql_staring += spkler+',';
    sql_staring += fanonoff+',';
    sql_staring += fanspeed+',';
    sql_staring += heat+',';
    sql_staring += ledonoff+',';
    sql_staring += ledbright+',';
    sql_staring += ledcolor;
    sql_staring +=' ,default); ';
    let result = await mysql(sql_staring);
    res.send(result);
  } else {
    res.send("실패");
  }
});

//아두이노가 상태정보 남기기
router.post('/:api/history', async function (req, res, next) {
  logger.info('post arduino/:api/history');
  let {
    api
  } = req.params;
  let bathid = req.body.bathid;
  let userid = req.body.userid;
  let start_time = req.body.start_time;
  let end_time = req.body.end_time;
  let avg_temp = req.body.avg_temp;
  let is_shower = req.body.is_shower;


  if (check(api)) {
    sql_staring = 'insert into User_History values(null,';
    sql_staring += bathid+',';
    sql_staring += userid+',';
    sql_staring += '\''+start_time+'\''+',';
    sql_staring += '\''+end_time+'\''+',';
    sql_staring += avg_temp+',';
    sql_staring += is_shower;
    sql_staring +='); ';
    let result = await mysql(sql_staring);
    res.send(result);
  } else {
    res.send("실패");
  }
});

module.exports = router;
