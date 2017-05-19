const {ObjectID}    = require('mongodb');
const {mongoose}    = require('./../server/db/mongoose');
const {Todo}        = require('./../server/models/todo');
const {User}        = require('./../server/models/user');

// var id    = '591f0d0daa6524ec0e16b2d911';
//
// if(!ObjectID.isValid(id)){
//     console.log('ID not valid!');
// }



// Todo.find({
//   _id: id
// }).then((docs) => {
//     console.log('Todos ', docs);
// });
//
// Todo.findOne({
//   _id: id
// }).then((doc) => {
//     console.log('Todo ', doc);
// });

// Todo.findById(id).then((doc) => {
//     if(!doc){
//       return console.log('Id not found!');
//     }
//     console.log('Todo By Id ', doc);
// }).catch((e) => console.log(e));


var userId    = '591f1270edeb2fd90fe99331';
User.findById(userId).then((result) => {
    if(!result){
        return console.log('Id not found!');
    }
    console.log('User was found', result);
}, (e) => {
  console.log('');
}).catch((e) => console.log(e));
