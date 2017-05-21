const _             = require('lodash');
const express       = require('express');
const bodyParser    = require('body-parser');
const {ObjectID}    = require('mongodb');

// Local Import;
var {mongoose}    = require('./db/mongoose');     // destructuring;
var {Todo}        = require('./models/todo');
var {User}        = require('./models/user');

var app           = express();
const port        = process.env.PORT || 3000;

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
        res.send({all_todos});
    }, (err) => {
        res.status(400).send(err);
    });
});

// Get Todo by ID;
app.get('/todos/:id', (req, res) => {
      var id    = req.params.id;

      if(!ObjectID.isValid(id)){
          return res.status(404).send();
      }

      Todo.findById(id).then((result) => {
          if(!result){
              return res.status(404).send();
          }
          res.send({result});
      }).catch((e) => {
          res.status(400).send();
      });
});

// Remove Todo;
app.delete('/todos/:id', (req, res) => {
      var id    = req.params.id;

      if(!ObjectID.isValid(id)){
          return res.status(404).send();
      }

      Todo.findByIdAndRemove(id).then((result) => {
          if(!result){
            return res.status(404).send();
          }
          res.send({result});
      }).catch((e) => {
          res.status(400).send();
      });
});

// Update Todo;
app.patch('/todos/:id', (req, res) => {
    var id       = req.params.id;
    var body    = _.pick(req.body, ['text', 'completed']);

    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt  = new Date().getTime();
    } else {
        body.completed    = false;
        body.completedAt  = null;
    }

    Todo.findByIdAndUpdate(id, {
      $set: body
    }, {
      new: true
    }).then((result) => {
        if(!result) {
            return res.status(404).send();
        }

        res.send({result});
    }).catch((e) => {
        res.status(400).send();
    });
});



app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports    = {app};
