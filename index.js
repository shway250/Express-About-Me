var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
// Include fs (short for filesystem) at the top. No need to install via npm
var fs = require('fs');

// var beerz = []

//middleware to set up static dir
// app.use(express.static(path.join(__dirname, 'views')));


app.use(bodyParser.urlencoded({extended: false}));
//Setting view engine
app.set('view engine', 'ejs');


// Express index route for my beers (lists all beers)
app.get('/views/:idx', function(req, res) {
  var beerz = fs.readFileSync('./data.json');
  beerz = JSON.parse(beerz);
  res.render('./views/', {myBeerz: btypes[bindex]});
});
//
// app.post('/animals', function(req, res) {
//   //debug code (output request body)
//   console.log(req.body);
//   res.send(req.body);
// });

//set up routes
app.get('/', function(req, res){
  res.send('<h1>About Me, Joe :)</h1><br><p>I am a simple man</p>');
  // res.sendFile('index.html');
  res.render('index', {name: 'Joe MAMMA!'});
});


app.listen(3000);
