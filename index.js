var express = require('express')
var app = express();
var path = require('path');


app.get('/', function(req, res){
	res.send("This is my about page!");
});

app.listen(3000);