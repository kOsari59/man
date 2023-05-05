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

router.get('/', function (req, res, next) {
  res.send("안녕");
});


router.get('/data/:id', function (req, res, next) {
  let {
    id
  } = req.params;
  sql_staring = 'select * from bath where bath_id = ';
  sql_staring += id;
  connection.query(sql_staring, (error, rows, fields) => {
    res.send(rows);
  });

});
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

module.exports = router;
