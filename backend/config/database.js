//db 환경 설정 파일
require('dotenv').config();
const mysql = require('mysql2');

var db_info = {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PW,
    database: process.env.DATABASE_NAME
}

module.exports = {
    init: function () {
        return mysql.createConnection(db_info);
    },
    connect: function(conn) {
        conn.connect(function(err) {
            if(err) console.error('mysql connection error : ' + err);
            else {
                console.log('mysql is connected successfully!');
                
            }
        });
    }
}