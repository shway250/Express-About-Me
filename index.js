let express = require('express');
let app = express();
let fs = require('fs');

app.set('view engine', 'ejs');

let data = fs.readFileSync('data.json');
data = JSON.parse(data);
// Routes
app.get('/', (req,res)=>{
// res.send('good');
    res.render('index',{data:data});
}); 



app.listen(3003);