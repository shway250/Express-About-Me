var express = require('express')
var app = express();
var path = require('path');
var bodyParser= require("body-parser");

var fs = require("fs");

//middleware to setup a directory so I can pull from it
app.use(express.static(path.join(__dirname, "views")));

//mora middleware so your app knows to use it on every request
app.use(bodyParser.urlencoded({extended: false}));

//setting frontend views to use ejs
app.set("view engine", "ejs");

//index route to grab the data.json
app.get('/', function(req, res){
	res.render('index')

});

app.post('/', function(res, req){

	console.log(req.body);
	res.send(req.body);
})

app.listen(3000);