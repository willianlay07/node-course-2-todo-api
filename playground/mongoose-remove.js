const {ObjectID}    = require('mongodb');
const {mongoose}    = require('./../server/db/mongoose');
const {Todo}        = require('./../server/models/todo');
const {User}        = require('./../server/models/user');


// Todo.remove({}) ; Remove All;
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

var normal_remove_id    = '592158f86fa5898518e4c827';
Todo.findOneAndRemove({_id: normal_remove_id}).then((result) => {
    console.log(result);
}, (e) => {
    console.log(e);
});

// var id    = '592158ee6fa5898518e4c826';
// Todo.findByIdAndRemove(id).then((result) => {
//     console.log(result);
// }, (e) => {
//     console.log(e);
// });
