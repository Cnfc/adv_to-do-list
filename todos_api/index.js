
var express = require('express');
var app = express();
var port = 3000;
var bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos');
// var mongo

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
  res.send("Hello from route");
})

app.use('/api/todos', todoRoutes);


app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});
