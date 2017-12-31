var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(ejsLayouts);
app.use(express.static(__dirname + '/public/'));

var obj = fs.readFileSync('data.json');
obj = JSON.parse(obj);


app.get('/', function(req, res){
	res.render('home');
});

app.get('/winston', function(req, res){
	res.render('winston', {obj:obj});
})

app.listen(3000);