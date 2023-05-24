var express = require('express');
var router = express.Router();

//기존의 파일내부 데이터 전송할때 사용
//const users=require('../data/users.json'); 해당 파일 읽어서 해당 값 전송

/* GET users listing. */
// /주소의 요청일때만 실행
/*router.get('/', function(req, res, next) {
  res.json({user:users[0]});
});*/

//DB에 있는 데이터 전송시에 사용

// const mysql = require('mysql2');
// const connection = mysql.createConnection({
//   host:'localhost',
//   user:'root',
//   password :'1234',
//   database:'smart_bath'
// });

// connection.connect();

router.get('/', function(req, res, next) {
  // connection.query('select * from user',(error,rows,fields)=>{
  //   if(error) throw error;
  //   res.send(rows);  
  // });
});

module.exports = router;
