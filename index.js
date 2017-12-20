var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');

var fs = require('fs');

// app.get('/AboutMe', function(req, res){
// 	var blurb = fs.readFileSync('./data.json');
// 	blurb = JSON.parse(blurb);
// 	res.render('index', {blurb});
// });

app.get('/AboutMe', function(req, res){
	var blurb = "Jade Rosse";
	res.render('index', {name: "Jade Rosse"});
});

app.listen(3000);