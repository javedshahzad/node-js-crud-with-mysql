'use strict';

var conn  = require('../car_hire_db');

exports.GetAllCars = function(req, res) {
let sqlQuery = "SELECT * FROM car JOIN category ON car.category_id=category.category_id";
  
let query = conn.query(sqlQuery, (err, results) => {
  if(err) throw err;
  res.send(apiResponse(results));
});
};
exports.PostNewCar = function(req, res) {
    console.log("Create function");
          let data = {
            make: req.body.make, 
            model: req.body.model,
            price:req.body.price,
            color:req.body.color,
            category_id:req.body.category_id
        };

          let sqlQuery = "INSERT INTO car SET ?";

          let query = conn.query(sqlQuery, data,(err, results) => {
            if(err) throw err;
            res.send(apiResponse(results));
          });

}
exports.FindCarById = function(req, res) {
    console.log("FindCarById function");
      let sqlQuery = "SELECT * FROM car JOIN category ON car.category_id=category.category_id WHERE car_id=" + req.params.id;

      let query = conn.query(sqlQuery, (err, results) => {
        if(err) throw err;
        res.send(apiResponse(results[0]));
      });
}
exports.UpdateCar = function(req, res) {
    console.log("UpdateCar function");
    let sqlQuery = `UPDATE car SET make="${req.body.make}",model="${req.body.model}",price="${req.body.price}",color="${req.body.color}",category_id=${req.body.category_id} WHERE car_id=${req.params.id}`;
  
      let query = conn.query(sqlQuery, (err, results) => {
        if(err) throw err;
        res.send(apiResponse(results));
      });
}
exports.DeleteCar = function(req, res) {
    console.log("delete function");
      let sqlQuery = "DELETE FROM car WHERE car_id="+req.params.id+"";

      let query = conn.query(sqlQuery, (err, results) => {
        if(err) throw err;
          res.send(apiResponse("Deleted"));
      });
}
/**
 * API Response
 *
 * @return response()
 */
function apiResponse(results){
    var response={"status": 200, "error": null, "response": results}
    return response;
}
   