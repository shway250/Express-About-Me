var express = require("express");
var path = require("path");
var app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("index", {
		name: "Colin",
		school: "General Assembly",
		job: "student",
		foods: ["ramen", "pho", "udon", "vermicelli noodles", "soba"], 
		places: ["Virginia", "Connecticut", "Argentina", "Washington DC", "Tokyo", "Tanzania", "Omaha", "Seattle"],
		image: "https://picsum.photos/200/500"
	})
})

app.listen(3000);