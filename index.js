var express = require('express');

var app = express();

app.get('/', function(req, res){
	res.render('home');
});

app.listen(3000);