'user strict';

const mysql = require('mysql');

//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'syedab10_syedab',
  password : 'V8GxkA-g)rI#',
  database : 'syedab10_car_hire_db'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;