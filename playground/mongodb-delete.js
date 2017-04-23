const {MongoClient, ObjectID}   = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany;
  // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then( (result) => {
  //     console.log(result);
  // });

  // deleteOne;
  // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
  //     console.log(result);
  // });

  // findOneAndDelete;
  // db.collection('Todos').findOneAndDelete({complete: false}).then((result) => {
  //     console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Wai'}).then((result) => {
  //       console.log(result);
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('58fa33f3a65680a833df5482')
  }).then((result) => {
      console.log(JSON.stringify(result, undefined, 2));
  });

  //db.close();
});
