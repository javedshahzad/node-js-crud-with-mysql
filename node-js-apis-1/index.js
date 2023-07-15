const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
var DatabaseConn  = require('./database_config');
const port = 1000;
app.use(bodyParser.json());
app.use(cors({
  origin: '*'
}));
app.set("Content-Security-Policy","default-src 'self'");
/**
 * Get All Items
 *
 * @return response()
 */
app.get('/server',(req, res) => {
  let dataBaseQry = "SELECT * FROM car JOIN category ON car.category_id=category.category_id";
  
  let query = DatabaseConn.query(dataBaseQry, (err, results) => {
    if(err) throw err;
    res.send(jsonResponse(results));
  });
});
/**
 * Get All Categories
 *
 * @return response()
 */
app.get('/server',(req, res) => {
    let dataBaseQry = "SELECT * FROM category";
    
    let query = DatabaseConn.query(dataBaseQry, (err, results) => {
      if(err) throw err;
      res.send(jsonResponse(results));
    });
  });
   
/**
 * Get Single Item
 *
 * @return response()
 */
app.get('/server/:id',(req, res) => {
  let dataBaseQry = "SELECT * FROM car JOIN category ON car.category_id=category.category_id WHERE car_id=" + req.params.id;
    
  let query = DatabaseConn.query(dataBaseQry, (err, results) => {
    if(err) throw err;
    res.send(jsonResponse(results[0]));
  });
});
   
/**
 * Create New Item
 *
 * @return response()
 */
app.post('/server',(req, res) => {
  let data = {
    make: req.body.make, 
    model: req.body.model,
    price:req.body.price,
    color:req.body.color,
    category_id:req.body.category_id,
    created_at:new Date(),
    updated_at:new Date(),
};
  
  let dataBaseQry = "INSERT INTO car SET ?";
  
  let query = DatabaseConn.query(dataBaseQry, data,(err, results) => {
    if(err) throw err;
    res.send(jsonResponse(results));
  });
});
   
/**
 * Update Item
 *
 * @return response()
 */
app.put('/server/:id',(req, res) => {
    let dataBaseQry = `UPDATE car SET make="${req.body.make}",model="${req.body.model}",price="${req.body.price}",color="${req.body.color}",category_id=${req.body.category_id} WHERE car_id=${req.params.id}`;
  
  let query = DatabaseConn.query(dataBaseQry, (err, results) => {
    if(err) throw err;
    res.send(jsonResponse(results));
  });
});
/**
 * Delete Item
 *
 * @return response()
 */
app.delete('/server/:id',(req, res) => {
  let dataBaseQry = "DELETE FROM car WHERE car_id="+req.params.id+"";
    
  let query = DatabaseConn.query(dataBaseQry, (err, results) => {
    if(err) throw err;
      res.send(jsonResponse("Deleted"));
  });
});
  
/**
 * API Response
 *
 * @return response()
 */
function jsonResponse(results){
    var response={"status": 200, "error": null, "response": results}
    return response;
}
   
/*------------------------------------------
--------------------------------------------
Server listening
--------------------------------------------
--------------------------------------------*/
app.listen(() =>{
  console.log(`Server started on port`);
});