const mysql = require('mysql2/promise');
require('dotenv').config();
  
  module.exports = mysql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PW,
    database: process.env.DATABASE_NAME,
    connectTimeout: 5000,
    connectionLimit: 30 //default 10
  })