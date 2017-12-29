
var express = require('express');
var app = express();
var port = 3000;

var todoRoutes = require('./routes/todos')
// var mongo


app.get('/', function(req, res){
  res.send("Hello from route");
})

app.use('/api/todos', todoRoutes);


app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});
