// Require and configure dependencies 
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

var fs = require('fs'); 

// setting view engine -- ejs automatically setup to look in folder 'views'
app.use(bodyParser.urlencoded({extended: false}));

app.set("view engine", "ejs");


// Express index route for aboutme
app.get('/aboutme', function(req, res) {
  var aboutme = fs.readFileSync('./data.json');
  aboutme = JSON.parse(aboutme); // taking string and turning into object
  res.render('index', {myAboutme: aboutme});
});

app.post('/aboutme', function(req, res) {
  //debug code (output request body)
  console.log(req.body);
  res.send(req.body);
});


// Build a home route
app.get('/', function(req, res){
  // res.send('My About Me Page!');
  // res.sendFile('index.html');
  res.render('index', {name: "Sweeney Arnett"});  // always takes 1 or 2 params -- first always file name
});



// Give app a port to listen to 
app.listen(3000);