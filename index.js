var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index', 	{name: "Peter Barbarone",
						foods:['sushi', 'pizza', 'veggies', 'sushi'],
						occupation: "student",
						graduation: "March something?",
						howifeel: "coding is HARD",
						img: "https://s.yimg.com/ny/api/res/1.2/0pltVmP5KiQNomXS3lNX4g--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/etonline.tv/0ee74c30a093dbcbfb434f92cc0721d6"
						});
});





app.listen(3000);