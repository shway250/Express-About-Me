var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	var dishes = fs.readFileSync('./data.json');
	dishes = JSON.parse(dishes);
	res.render('index', {
		mydishes: dishes,
		name: "Phil"
	});
});

app.listen(3000);