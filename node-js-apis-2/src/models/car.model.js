'user strict';
var dbConn = require('../../config/db.config');

//Employee object create
var Car = function(car){
    this.make           = car.make;
    this.model          = car.model;
    this.price          = car.price;
    this.color          = car.color;
    this.category_id    = car.category_id;
    this.created_at     = new Date();
    this.updated_at     = new Date();
};
Car.create = function (newCar, result) {    
    dbConn.query("INSERT INTO car set ?", newCar, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};
Car.findById = function (id, result) {
    dbConn.query("Select * from car JOIN category ON car.category_id=category.category_id where car_id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Car.findAll = function (result) {
    dbConn.query("Select * from car JOIN category ON car.category_id=category.category_id", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('employees : ', res);  
            result(null, res);
        }
    });   
};
Car.update = function(id, car, result){
  dbConn.query("UPDATE car SET make=?,model=?,price=?,color=?,category_id=? WHERE car_id = ?", [car.make,car.model,car.price,car.color,car.category_id, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Car.delete = function(id, result){
     dbConn.query("DELETE FROM car WHERE car_id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Car;