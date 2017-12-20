var express = require('express');
var path = require ('path');
var app = express ();
var fs = require ('fs');

// app.use(express.static(path.join(__dirname, 'views')));
app.set('view engine', 'ejs');

// app.get('/', function(req,res){
//   var info = fs.readFileSync('data.json');
//   info = JSON.
// })
app.get('/',function(req,res){
  res.render('index', {name: "Tony Phan",
  food:["pho","sushi", "ramen"]
});
  res.sendFile('index.ejs');
});

app.listen(3000);
