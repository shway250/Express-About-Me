var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// Express index route for aboutme
app.get('/', function(req, res) {
  var aboutMe = fs.readFileSync('about-me.json');
  aboutMe = JSON.parse(aboutMe);
  res.render('index', {aboutMe: aboutMe});
});

app.listen(3000);

