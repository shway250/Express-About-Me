//Require and configure modules
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
//Include fs (short for filesystem) at the top. No need to install via npm
var fs = require('fs');


//midleware to set up static directory
// app.use(express.static(path.join(__dirname, 'views')));
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');


//Express index route 
app.get('/aboutme', function(req,res) {
  var myInfo = fs.readFileSync('./data.json');
  myInfo = JSON.parse(myInfo);
  console.log('post parse', myInfo);
  res.render('aboutme/index', {info: myInfo});
  // res.render('animals/index', {myAnimals: animals});
});


app.listen(3000);