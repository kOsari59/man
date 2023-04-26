var express = require('express');
var router = express.Router();

const users=require('../data/users.json');

/* GET users listing. */
// /주소의 요청일때만 실행
router.get('/', function(req, res, next) {
  res.json({user:users[0]});
});

module.exports = router;
