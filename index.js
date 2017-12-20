var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use("/views",express.static(__dirname + "/views"));

var description = "You want to know about me? Let me tell you about me. I was born in Mother Earth, the heartland of the great US of A."
+" I was a young punk kid, just lookin' for a break. Then I was abducted by UFOs.";

var favoriteFoods = [
   "spicy tuna roll",
   "thin crust pizza",
   "sweet potato french fries",
   "warm chocolate baby cake",
   "Bobo's surf & turf",
   "kumomoto oysters",
   "Full Tilt Blue Moon Vegan ice cream",
   "raspberry chocolate truffles",
   "chocolate crinkle cookies",
   "Samurai Noodle ramen"

];

var photo = "/views/img/DSC08431b.jpg";



app.get("/", function(req,res) {
   var myinfo = {
      description: description,
      foods: favoriteFoods,
      photo: photo
   };
   res.render("index", {myinfo: myinfo});
});



//-- give a port to listen to
app.listen(3000);
