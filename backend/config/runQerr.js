const mysql = require('./runQuery');
const logger = require('./winton');
async function runQerr(sql) {
  try{
    return await mysql(sql_staring);
  }catch(err){
    logger.error('fail query :' + sql_staring);
    return "fail";
  }
}

module.exports = runQerr;