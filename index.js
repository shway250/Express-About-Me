var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(__dirname + '/'));

app.set("view engine", "ejs");

app.get('/', function(req,res){
	var name = 'Reilly';
	res.render('index',{name: name});
});

app.get('/aboutme', function(req,res){
	var aboutObj = fs.readFileSync('./data.json');
	aboutObj = JSON.parse(aboutObj);
	res.render('aboutme/index',{aboutMe: aboutObj});
});

app.listen(3000);