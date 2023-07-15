const mysql = require('mysql');
/*------------------------------------------
--------------------------------------------
Database Connection
--------------------------------------------
--------------------------------------------*/

// const DatabaseConn= mysql.createConnection({
//     host: 'localhost',
//     user: 'root', /* MySQL User arehma14_root */
//     password: '', /* MySQL Password 3BjeTC-KI()- */
//     database: 'car_hire_db' /* MySQL Database arehma14_car_hire_db*/
//   });
  const DatabaseConn = mysql.createConnection({
    host: 'localhost',
    user: 'arehma14_root', /* MySQL User arehma14_root */
    password: '3BjeTC-KI()-', /* MySQL Password  */
    database: 'arehma14_car_hire_db' /* MySQL Database */
  });
     
  /*------------------------------------------
  --------------------------------------------
  Shows Mysql Connect
  --------------------------------------------
  --------------------------------------------*/
  DatabaseConn.connect((err) =>{
    if(err) throw err;
    console.log('Mysql Connected with App...');
  });
  module.exports = DatabaseConn;