//const MongoClient   = require('mongodb').MongoClient;
const {MongoClient, ObjectID}   = require('mongodb');   // destructing; same with above line;

// var obj = new ObjectID();
// console.log(obj);

// var user      = {name: 'Wai', age: 28};
// var {name}    = user;
// console.log(name);
// ES 6;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
      return console.log('Unable to connect MongoDB server!');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to to',
    //     complete: false
    // }, (err, result) => {
    //     if(err){
    //       return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Wai',
    //     age: 28,
    //     location: 'Singapore'
    // }, (err, result) => {
    //     if(err){
    //       return console.log('Unable to insert user', err);
    //     }
    //     //console.log(JSON.stringify(result.ops, undefined, 2));
    //
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});
