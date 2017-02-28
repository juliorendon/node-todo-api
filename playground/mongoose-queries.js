const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const{Todo} = require('./../server/models/todo');
const{User} = require('./../server/models/user');

// var id = '58b58eb44d9d7c041c4c282d';
//
// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos)
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo)
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo)
// }).catch((e) => {
//   console.log(e);
// });

// Challengue: Query User Collection
var id = '58af079eb59b0902e01eb288';

if(!ObjectID.isValid(id)) {
  return console.log('ID not valid');
}

User.findById(id).then((user) => {
  if(!user) {
    return console.log('User not found');
  }

  console.log('User by Id', user);
}, (e) => {
  console.log(e);
});
