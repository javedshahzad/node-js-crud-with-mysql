const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

// create express app
const app = express();

// Setup server port
const port = 2000;

// parse requests of content-type - application/json
app.use(bodyParser.json());
// use cors
app.use(cors({
  origin: '*'
}));
app.set("Content-Security-Policy","default-src 'self'");

// Require Car routes
const CarRoutes = require('./src/routes/car.routes')

// using as middleware
app.use('/server', CarRoutes)

// listen for requests
app.listen( () => {
  console.log(`Server is listening on port ${port}`);
});