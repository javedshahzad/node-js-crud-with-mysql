const express = require('express');
const router = express.Router();
const carController = require('../controller/car.controller');

// Retrieve all Cars
router.get('/', carController.GetAllCars);

// Create a new Car
router.post('/', carController.PostNewCar);

// Retrieve a single Car with id
router.get('/:id', carController.FindCarById);

// Update a Car with id
router.put('/:id', carController.UpdateCar);

// Delete a Car with id
router.delete('/:id', carController.DeleteCar);

module.exports = router