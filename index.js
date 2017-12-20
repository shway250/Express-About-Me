var express = require('express');
var path = require('path');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('index', {
		name: 'Phil',
		dog: 'Rocky',
		dish: ['Ramen', 'Red Curry', 'Double Cheeseburger', 'Triple Cheeseburger', 'Jumbo Shrimp']
	});
});

app.listen(3000);