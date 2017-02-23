var {mongoose} = require('./db/mongoose');



// var newTodo = new Todo({
//   text: 'Cook dinner 2'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Todo Saved', doc);
// }, (e) => {
//   console.log('Unable to sabe Todo', e);
// });

// var newTodo2 = new Todo({
//   text: 'Go to the Gym',
//   completed: false,
//   completedAt: 0
// });
//
// newTodo2.save().then((doc) => {
//   console.log('Todo saved', doc);
// }, (e) => {
//   console.log('Unable to save Todo', e);
// });



var newUser = new User({
  email: 'juliorendon@gmail.com'
});

newUser.save().then((doc) => {
  console.log('User saved!', doc);
}, (e) => {
  console.log('Unable to save User', e);
});
