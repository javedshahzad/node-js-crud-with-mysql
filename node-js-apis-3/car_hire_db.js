const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'dkhati10_root', /* MySQL User */
    password: 'M3VCUQU(OSN{', /* MySQL Password */
    database: 'dkhati10_car_hire_db' /* MySQL Database */
  });
  conn.connect((err) =>{
    if(err) throw err;
    console.log('Mysql Connected with App...');
  });
  module.exports = conn;