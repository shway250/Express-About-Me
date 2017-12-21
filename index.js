var express = require('express');
var path = require('path');
var app = express();




app.use(express.static(__dirname + '/public'));


app.set("view engine", "ejs");

app.get('/', function(req,res){
	res.render('index',{
		name: "Emmy",
		description: "I am the lemon in a family of oranges.",
		foods: ["Cilantro", "Pork", "Non-Organic Dairy", "Gluten"],
		places: ["Netherlands", "Italy", "Mexico", "Bali"],
		languages: ["Hipster Ipsum", "French", "Dutch", "Spanish"],

	});
})

app.listen(2017);