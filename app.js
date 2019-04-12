const express = require('express');
const app = express();
const port = process.env.PORT || 7900;


const bodyParser = require('body-parser');
app.use(bodyParser.json());

// setup MongoDB Atlas
require('./models/db.js');

// routes setup
var routes = require('./routes/routes.js');
app.use('/',routes);

app.get('/', function(req,res){
  res.send("Welcome to reUser");
});

app.listen(port, function(){
  console.log("Listening on port " + port);
});
