// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const urlstr = require('./mongodb-uri').uri();

var obj = new ObjectID();
 console.log(obj);



// var user = {name: 'Kostja', age: 47, location: 'London'};

// var {name} = user;

// console.log(name);

MongoClient.connect(urlstr, (err, client) => {
var db = client.db('ToDoApp');

    if (err) {
        return console.log('unable to connnect', err) 
            }

        console.log('Connected to MongoDB server');

        // db.collection('Todos').insertOne(
        //     {
        //         text: 'List of items.',
        //         completed: false
        //     },
        // (err, res) => {
        //     if (err) {
        //         return console.log('Unable to insert record.', err);
        //     }

        //     console.log(JSON.stringify(res.ops, undefined, 2));
            
        // });

        // Users Collection {name, age, location}

        db.collection('Users').insertOne(
            {
                name: 'John Smith',
                age: 43,
                location: 'Birmingham'

            }, (err, res) => {
                if (err) {
                    return (console.log(err));
                }
                console.log(res.ops[0]._id.getTimestamp());
            }
        
        
        );



        client.close();
});