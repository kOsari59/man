const mysql = require('./runQuery');
const logger = require('./winton');
async function runQerr(sql) {
  try{
    await mysql(sql_staring);
    return "sucess";
  }catch(err){
    logger.error('fail query :' + sql_staring);
    return "fail";
  }
}

module.exports = runQerr;