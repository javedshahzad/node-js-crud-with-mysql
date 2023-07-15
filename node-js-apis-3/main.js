const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
/*------------------------------------------
parse application/json
--------------------------------------------*/
const port = 3000;
app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}));
app.set("Content-Security-Policy","default-src 'self'");
app.get('/',function(req,res){
  res.set('Content-Type','text/html; charset=utf-8');
  res.send("<h2>Node Js App is running!</h2>")
})
const CarRoutes = require('./routes/car.routes');
app.use('/server', CarRoutes);

/*------------------------------------------
Server listening
--------------------------------------------*/
app.listen(() =>{
  console.log(`Server started on port`);
});