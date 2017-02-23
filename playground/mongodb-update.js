const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('58aeba78d618b31caf34ba18')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((results) => {
  //   console.log(results);
  // });

  // challengue: Update the name of an Users document
  // and increment its age
  var newName = 'Julio';
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('589af77a6c2336075c1db12c')
  }, {
    $set: {
      name: newName
    },
    $inc: {
      age: -1
    }
  }, {
    returnOriginal: false
  }).then((results) => {
    console.log(results);
  });


  // db.close();
});
