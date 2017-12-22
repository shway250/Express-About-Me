var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var fs = require('fs');

app.use(bodyParser.urlencoded({extended: false}));

app.set("view engine", "ejs");

app.get('/', function(req, res){
	// res.sendFile('index.ejs');
	res.render('index',{name: "Desiree. Hi and welcome to my page! I currently reside Seattle, WA with my partner, Pickles our Bunny and Snicklefritz our cat. After spending seven years in Bellingham, WA and growing up in Spokane, WA you could say that I was Pacific Northwest born and raised. I love hiking, traveling, reading, spending time with loved ones when I'm not pursuing my real passion of Web Development. Thank you for visiting my site!"});
});



app.listen(3000);