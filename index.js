var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path')
var fs = require('fs');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/'));

app.set('view engine', 'ejs');


app.get('/', function(req, res) {
  var aboutObj = fs.readFileSync('./data.json');
  aboutObj = JSON.parse(aboutObj);
  res.render('index', {aboutMe: aboutObj});
});


app.listen(3000);
