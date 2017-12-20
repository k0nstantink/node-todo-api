// Library imports

var express = require('express');
var bodyParser = require('body-parser');

// Local imports
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');




var app = express();

app.use(bodyParser.json());
app.post('/todos', (req, res) => {
    var todo = new Todo({text: req.body.text});
    todo.save().then((doc) => {
        res.send(doc);
        console.log(`${doc} saved to database`);
    }, (err) => {
        res.status(400).send(err);
        console.log('Rollback. Data not saved', err);
    });
    console.log(req.body);
});


app.listen(3000, () => console.log('Started on port 3000'));



