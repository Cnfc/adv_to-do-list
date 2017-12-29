var express = require("express");
var router = express.Router();
var db = require('../models');


router.get('/', function(req, res){
  db.Todo.find()
  .then(function(todos){
    res.json(todos);
  })
  .catch(function(err){
    res.send(err);
  })
});

router.post('/', function(req, res){
  // res.send("This is the post route");
  db.Todo.create(req.body)
  .then(function(newTodo){
    res.status(201).json(newTodo);
  })
  .catch(function(err){
    res.send(err);
  })
});

// FOUND by TODOID
router.get('/:todoId', function(req, res){
  db.Todo.findById(req.params.todoId)
  .then(function(foundTodo){
    res.json(foundTodo);
  })
  .catch(function(err){
    res.send(err);
  })
});

router.put('/:todoId', function(req, res){
  db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
  .then(function(todo){
    res.json(todo);
  })
  .catch(function(err){
    res.send(err);
  })
  // res.send("UPDATE ROUTE!");
});











module.exports = router;
