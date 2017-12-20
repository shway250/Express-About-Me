// require and configure node
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

// Include fs (short for filesystem) at the top. No need to install via npm
// fs stands for file system
var fs = require('fs');


// middleware to set up static directory
app.set("view engine", "ejs");


app.use(express.static(path.join(__dirname, '/public')));


// set up routes
app.get('/', function(req,res){
	var foods = fs.readFileSync('./data.json');
  	foods = JSON.parse(foods);

  	res.render('index', {
  		myFoods: foods,
  		name: "Antonia Villa"
  	});
	
});


// Give our app a port to listen to
app.listen(3000);
