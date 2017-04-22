const {MongoClient, ObjectID}   = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find().toArray().then((docs) => {
  //     console.log('Todos');
  //     console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //     console.log('Unable to fetch Todos', err);
  // });


  // db.collection('Todos').find({complete: false}).toArray().then((docs) => {
  //     console.log('Todos');
  //     console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //     console.log('Unable to fetch Todos', err);
  // });

  // db.collection('Todos').find({
  //     _id: new ObjectID('58fb3658fa0a1405b4b29260')
  // }).toArray().then((docs) => {
  //     console.log('Todos');
  //     console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //     console.log('Unable to fetch Todos', err);
  // });


  // db.collection('Todos').find().count().then((count) => {
  //     console.log(`Todos count : ${count}`);
  // }, (err) => {
  //     console.log('Unable to fetch Todos', err);
  // });

  db.collection('Users').find({name: 'Wai'}).toArray().then((docs) => {
      console.log('Users');
      console.log(JSON.stringify(docs, undefined, 4));
  }, (err) => {
    console.log('Unable to fetch User!');
  });

  //db.close();
});
