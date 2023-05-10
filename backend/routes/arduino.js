var express = require('express');
var router = express.Router();

const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'smart_bath'
});

connection.connect();
//바스 정보 올리고 받기
//스케줄 정보 받기



//아두이노 온도 정보 갱신
router.put('/temp/:id/:temp', function (req, res, next) {
  let {
    id,
    temp
  } = req.params;
  connection.query("update bath set temp =? where bath_id = ?", [temp, id], (error, rows, fields) => {
    if (error) {
      console.log(error);
    }
    res.send(rows);
  })
});
//아두이노 상태 정보 갱신
router.put('/state/:id/:state', function (req, res, next) {
  let {
    id,
    state
  } = req.params;
  connection.query("update bath set state =? where bath_id = ?", [state, id], (error, rows, fields) => {
    if (error) {
      console.log(error);
    }
    res.send(rows);
  })
});

//아두이노 온수 벨브 정보 갱신
router.put('/h_valve/:id/:h_valve', function (req, res, next) {
  let {
    id,
    h_valve
  } = req.params;
  connection.query("update bath set h_valve =? where bath_id = ?", [h_valve, id], (error, rows, fields) => {
    if (error) {
      console.log(error);
    }
    res.send(rows);
  })
});

//아두이노 냉수 밸브 정보 갱신
router.put('/c_valve/:id/:c_valve', function (req, res, next) {
  let {
    id,
    c_valve
  } = req.params;
  connection.query("update bath set c_valve =? where bath_id = ?", [c_valve, id], (error, rows, fields) => {
    if (error) {
      console.log(error);
    }
    res.send(rows);
  })
});

//아두이노 물 높이 정보 갱신
router.put('/water_level/:id/:water_level', function (req, res, next) {
  let {
    id,
    water_level
  } = req.params;
  connection.query("update bath set water_level =? where bath_id = ?", [water_level, id], (error, rows, fields) => {
    if (error) {
      console.log(error);
    }
    res.send(rows);
  })
});

//아두이노 스피커 정보 갱신
router.put('/spkier/:id/:spkier', function (req, res, next) {
  let {
    id,
    spkier
  } = req.params;
  connection.query("update bath set spkler =? where bath_id = ?", [spkier, id], (error, rows, fields) => {
    if (error) {
      console.log(error);
    }
    res.send(rows);
  })
});

//아두이노 마개 정보 갱신
router.put('/cap/:id/:cap', function (req, res, next) {
  let {
    id,
    cap
  } = req.params;
  connection.query("update bath set cap =? where bath_id = ?", [cap, id], (error, rows, fields) => {
    if (error) {
      console.log(error);
    }
    res.send(rows);
  })
});

router.put('/fan_speed/:id/:fan_speed', function (req, res, next) {
  let {
    id,
    fan_speed
  } = req.params;
  connection.query("update bath set fan_speed =? where bath_id = ?", [fan_speed, id], (error, rows, fields) => {
    if (error) {
      console.log(error);
    }
    res.send(rows);
  })
});

//아두이노 팬 정보 갱신
router.put('/fan_onoff/:id/:fan_onoff', function (req, res, next) {
  let {
    id,
    fan_onoff
  } = req.params;
  connection.query("update bath set fan_onoff =? where bath_id = ?", [fan_onoff, id], (error, rows, fields) => {
    if (error) {
      console.log(error);
    }
    res.send(rows);
  })
});
//아두이노 속도 정보 갱신
router.put('/heat/:id/:heat', function (req, res, next) {
  let {
    id,
    heat
  } = req.params;
  connection.query("update bath set heat =? where bath_id = ?", [heat, id], (error, rows, fields) => {
    if (error) {
      console.log(error);
    }
    res.send(rows);
  })
});

//아두이노 led 정보 갱신
router.put('/led_onoff/:id/:led_onoff', function (req, res, next) {
  let {
    id,
    led_onoff
  } = req.params;
  connection.query("update bath set led_onoff =? where bath_id = ?", [led_onoff, id], (error, rows, fields) => {
    if (error) {
      console.log(error);
    }
    res.send(rows);
  })
});

//아두이노 led 색상 정보 갱신
router.put('/led_color/:id/:led_color', function (req, res, next) {
  let {
    id,
    led_color
  } = req.params;
  connection.query("update bath set led_color =? where bath_id = ?", [led_color, id], (error, rows, fields) => {
    if (error) {
      console.log(error);
    }
    res.send(rows);
  })
});

//아두이노 led 밝기 갱신
router.put('/led_bright/:id/:led_bright', function (req, res, next) {
  let {
    id,
    led_bright
  } = req.params;
  connection.query("update bath set led_bright =? where bath_id = ?", [led_bright, id], (error, rows, fields) => {
    if (error) {
      console.log(error);
    }
    res.send(rows);
  })
});
//아두이노가 예약 정보 읽어 오기 (bath_id로)
router.get('/schedule/:id', function (req, res, next) {
  let {
    id
  } = req.params;
  sql_staring = 'select * from user_schedule where bath_id = ';
  sql_staring += id;
  connection.query(sql_staring, (error, rows, fields) => {
    res.send(rows);
  });

});


//아두이노가 기록 남기기
router.post('/history',function(req,res,next){
  let schedule_id = req.body.schedule_id;
  let bath_id = req.body.bath_id;
  let user_id = req.body.user_id;
  let start_time = req.body.start_time;
  let end_time = req.body.end_time;
  let avg_temp =  req.body.avg_temp;
  let is_shower = req.body.is_shower;
  let state = req.body.state;
  let h_vale = req.body.h_vale;
  let c_vale = req.body.c_vale;
  let temp = req.body.temp;
  let water_level =req.body.water_level;
  let spkler = req.body.spkler;
  let cap = req.body.cap;
  let fan_onoff = req.body.fan_onoff;
  let fan_speed = req.body.fan_speed;
  let heat = req.body.heat;
  let led_onoff =req.body.led_onoff;
  let led_color =req.body.led_color;
  let led_bright =req.body.led_bright;


  connection.query("insert into user_history values(null,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?); ", [schedule_id,bath_id,user_id,start_time,end_time,avg_temp,is_shower,state,h_vale,c_vale,temp,water_level,spkler,c_vale,fan_onoff,fan_speed,heat,led_onoff,led_color,led_bright], (error, rows, fields) => {
    if (error) {
      console.log(error);
    }
    res.send(rows);
  })
});

module.exports = router;
