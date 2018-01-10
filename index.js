var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();

//setting frontend views to use ejs
app.set('view engine', 'ejs');
//middleware to setup a directory so I can pull from it
app.use(express.static(__dirname + '/public/'));
app.use(ejsLayouts);
//mora middleware so your app knows to use it on every request
app.use(bodyParser.urlencoded({extended: false}));
var object = 
//home route to grab the data.json
app.get('/', function(req, res){
	res.render("home");
});

app.get("/peter", function(req, res){
	res.render("peter", {object:object});

});

app.listen(3000);