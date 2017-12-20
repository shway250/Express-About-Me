var express = require('express');
var path = require('path');
var app = express();
var fs = require('fs');
app.set("view engine", "ejs");


app.get('/', function(req, res) {
  var aboutMe = fs.readFileSync('./data.json');
  aboutMe = JSON.parse(aboutMe); //turning into object
  res.render('index', {myInfo: aboutMe});
  console.log(aboutMe.name, aboutMe.imgSource);
});


app.listen(3000);