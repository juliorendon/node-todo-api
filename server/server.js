var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

app = express();

// Setting up the Body Parser Middleware
app.use(bodyParser.json());

// route to create a new todo
app.post('/todos', (req, res) => {
  // console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  })

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

// list todos
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({
      todos,  // it's the same as todos: todos
    })
  }, (e) => {
    res.status(400).send(e);
  });
});

// get a todo
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if(todo) {
      res.status(200).send(todo);
    } else {
      res.status(404).send();
    }
  }, (e) => {
      res.status(400).send();
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};
