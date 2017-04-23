const {MongoClient, ObjectID}   = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('58fc223afa0a1405b4b2a343')
  // }, {
  //   $set: {
  //     complete: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });
  //

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('58fc23f0fa0a1405b4b2a3f6')
  }, {
    $set: {
      name: 'Wai Hlyan Hein'
    },
    $inc: {
        age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
      console.log(result);
  });


  //db.close();
});
