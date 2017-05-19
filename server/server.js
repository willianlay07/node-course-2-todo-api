var express       = require('express');
var bodyParser    = require('body-parser');

// Local Import;
var {mongoose}    = require('./db/mongoose');     // destructuring;
var {Todo}        = require('./models/todo');
var {User}        = require('./models/user');

var app           = express();

app.use(bodyParser.json());   // Middleware;

// Create Todo;
app.post('/todos', (req, res) => {
    var todo    = new Todo({
        text: req.body.text
    });

    todo.save().then((docs) => {
        res.send(docs);
    }, (err) => {
        res.status(400).send(err);
    });
});


// Get Todo;
app.get('/todos', (req, res) => {
    Todo.find().then((all_todos) => {
        res.send({all_todos})
    }, (err) => {
        res.status(400).send(err);
    });
});




app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports    = {app};
