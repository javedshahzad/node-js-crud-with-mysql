'use strict';

const CarModel = require('../models/car.model');

exports.findAll = function(req, res) {
    CarModel.findAll(function(err, car) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', car);
    res.send(car);
  });
};


exports.create = function(req, res) {
    const New_Car_Model = new CarModel(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        CarModel.create(New_Car_Model, function(err, car) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Car added successfully!",data:car});
        });
    }
};


exports.findById = function(req, res) {
    CarModel.findById(req.params.id, function(err, car) {
        if (err)
        res.send(err);
        res.json(car);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        CarModel.update(req.params.id, new CarModel(req.body), function(err, Car) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Car successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
    CarModel.delete( req.params.id, function(err, car) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Car successfully deleted' });
  });
};