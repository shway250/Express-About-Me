var express = require('express');
var path = require('path');
var app = express();

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res){
  res.render('index', {
    name: "Orion aka Thronan...the space viking",
    about: "I'm just a man, who likes to do...things",
    interests: ["making music", "climbing on things", "backpacking", "pushups", "eating stuff"],
    image: "https://i.imgur.com/r6nqMxE.jpg/300/300"
  });
});
app.listen(3000);
