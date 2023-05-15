var express = require('express');
const { check } = require('../config/api');
var router = express.Router();

var db_config = require(__dirname + '/../config/database.js');
var connection = db_config.init();
db_config.connect(connection);


//아두이노 전체 데이터 들고오기
router.get('/:api/data/:id', function (req, res, next) {
  let {
    id,
    api
  } = req.params;
  if (check(api)) {
    sql_staring = 'select * from bath where bath_id = ';
    sql_staring += id;
    connection.query(sql_staring, (error, rows, fields) => {
      res.send(rows);
    });
  }
  else {
    res.send("실패");
  }
});

//아두이노 상태 데이터 들고오기
router.get('/:api/state/:id', function (req, res, next) {
  let {
    id,
    api
  } = req.params;
  if (check(api)) {
    sql_staring = 'select state from bath where bath_id = ';
    sql_staring += id;
    connection.query(sql_staring, (error, rows, fields) => {
      res.send(rows);
    });
  }
  else {
    res.send("실패");
  }
});

//아두이노 온수 밸브 데이터 들고오기
router.get('/:api/h_valve/:id', function (req, res, next) {
  let {
    id,
    api
  } = req.params;
  if (check(api)) {
    sql_staring = 'select h_valve from bath where bath_id = ';
    sql_staring += id;
    connection.query(sql_staring, (error, rows, fields) => {
      res.send(rows);
    });
  }
  else {
    res.send("실패");
  }
});

//아두이노 냉수 밸브 데이터 들고오기
router.get('/:api/c_valve/:id', function (req, res, next) {
  let {
    id,
    api
  } = req.params;
  if (check(api)) {
    sql_staring = 'select c_valve from bath where bath_id = ';
    sql_staring += id;
    connection.query(sql_staring, (error, rows, fields) => {
      res.send(rows);
    });
  }
  else {
    res.send("실패");
  }
});

//아두이노 온도 데이터 들고오기
router.get('/:api/temp/:id', function (req, res, next) {
  let {
    id,
    api
  } = req.params;
  if (check(api)) {
    sql_staring = 'select temp from bath where bath_id = ';
    sql_staring += id;
    connection.query(sql_staring, (error, rows, fields) => {
      res.send(rows);
    });
  }
  else {
    res.send("실패");
  }
});

//아두이노 물높이 데이터 들고오기
router.get('/:api/water_level/:id', function (req, res, next) {
  let {
    id,
    api
  } = req.params;
  if (check(api)) {
    sql_staring = 'select water_level from bath where bath_id = ';
    sql_staring += id;
    connection.query(sql_staring, (error, rows, fields) => {
      res.send(rows);
    });
  }
  else {
    res.send("실패");
  }
});

//아두이노 스피커 데이터 들고오기
router.get('/:api/spkler/:id', function (req, res, next) {
  let {
    id,
    api
  } = req.params;
  if (check(api)) {
    sql_staring = 'select spkler from bath where bath_id = ';
    sql_staring += id;
    connection.query(sql_staring, (error, rows, fields) => {
      res.send(rows);
    });
  }
  else {
    res.send("실패");
  }
});

//아두이노 마개 데이터 들고오기
router.get('/:api/cap/:id', function (req, res, next) {
  let {
    id,
    api
  } = req.params;
  if (check(api)) {
    sql_staring = 'select cap from bath where bath_id = ';
    sql_staring += id;
    connection.query(sql_staring, (error, rows, fields) => {
      res.send(rows);
    });
  } else {
    res.send("실패");
  }
});

//아두이노 팬 데이터 들고오기
router.get('/:api/fan_onoff/:id', function (req, res, next) {
  let {
    id,
    api
  } = req.params;
  if (check(api)) {
    sql_staring = 'select fan_onoff from bath where bath_id = ';
    sql_staring += id;
    connection.query(sql_staring, (error, rows, fields) => {
      res.send(rows);
    });
  }
  else {
    res.send("실패");
  }
});

//아두이노 팬 속도 들고오기
router.get('/:api/fan_speed/:id', function (req, res, next) {
  let {
    id,
    api
  } = req.params;
  if (check(api)) {
    sql_staring = 'select fan_speed from bath where bath_id = ';
    sql_staring += id;
    connection.query(sql_staring, (error, rows, fields) => {
      res.send(rows);
    });
  } else {
    res.send("실패");
  }

});

//아두이노 열선 데이터 들고오기
router.get('/:api/heat/:id', function (req, res, next) {
  let {
    id,
    api
  } = req.params;
  if (check(api)) {
    sql_staring = 'select heat from bath where bath_id = ';
    sql_staring += id;
    connection.query(sql_staring, (error, rows, fields) => {
      res.send(rows);
    });
  }
  else {
    res.send("실패");
  }
});

//아두이노 led_onoff 데이터 들고오기
router.get('/:api/led_onoff/:id', function (req, res, next) {
  let {
    id,
    api
  } = req.params;
  if (check(api)) {
    sql_staring = 'select led_onoff from bath where bath_id = ';
    sql_staring += id;
    connection.query(sql_staring, (error, rows, fields) => {
      res.send(rows);
    });
  }
  else {
    res.send("실패");
  }
});

//아두이노 led_color 데이터 들고오기
router.get('/:api/led_color/:id', function (req, res, next) {
  let {
    id,
    api
  } = req.params;
  if (check(api)) {
    sql_staring = 'select led_color from bath where bath_id = ';
    sql_staring += id;
    connection.query(sql_staring, (error, rows, fields) => {
      res.send(rows);
    });
  }
  else {
    res.send("실패");
  }
});

//아두이노 led_bright 데이터 들고오기
router.get('/:api/led_bright/:id', function (req, res, next) {
  let {
    id,
    api
  } = req.params;
  if (check(api)) {
    sql_staring = 'select led_bright from bath where bath_id = ';
    sql_staring += id;
    connection.query(sql_staring, (error, rows, fields) => {
      res.send(rows);
    });
  }
  else {
    res.send("실패");
  }
});

//얘약 설정
router.post('/:api/schedule', function (req, res, next) {

  let {
    api
  } = req.params;

  let user_id = req.body.user_id;
  let bath_id = req.body.bath_id;
  let h_valve = req.body.h_valve;
  let c_valve = req.body.c_valve;
  let temp = req.body.temp;
  let water_level = req.body.water_level;
  let spkler = req.body.spkler;
  let cap = req.body.cap;
  let fan_onoff = req.body.fan_onoff;
  let fan_speed = req.body.fan_speed;
  let heat = req.body.heat;
  let led_onoff = req.body.led_onoff;
  let led_color = req.body.led_color;
  let led_bright = req.body.led_bright;
  let clean_time = req.body.clean_time;
  let start_time = req.body.start_time;
  if (check(api)) {
    connection.query("insert into user_schedule values(null,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?); ", [user_id, bath_id, h_valve, c_valve, temp, water_level, spkler, cap, fan_onoff, fan_speed, heat, led_onoff, led_color, led_bright,clean_time,start_time], (error, rows, fields) => {
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


module.exports = router;
