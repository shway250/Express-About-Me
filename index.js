var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();

// Include fs (short for filesystem) at the top. No need to install via npm
var fs = require("fs");

// middleware to set up static directory
app.use(express.static(path.join(__dirname, "views")));
//app.use(express.static(path.join(__dirname, 'public')));

// tell your app to use the module
app.use(bodyParser.urlencoded({extended: false}));

// setting view engine
app.set("view engine", "ejs");


// Express index route for animals (lists all animals)
app.get("/", function(req, res) {
  var users = fs.readFileSync("./data.json");
  users = JSON.parse(users);
  res.render("users/index", {myUsers: users});
});

app.post("/", function(req, res) {
  //debug code (output request body)
  console.log(req.body);
  res.send(req.body);
});

// give our app a port to listen to
app.listen(3000);