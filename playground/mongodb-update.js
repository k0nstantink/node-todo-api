const {MongoClient, ObjectID} = require('mongodb');
const urlstr = require('./mongodb-uri').uri();
const mongoCommand = require('./mongodb-commands');

MongoClient.connect(urlstr, (err, client) => 
            {
                const db = client.db('ToDoApp');

                // db.collection('Users').findOneAndUpdate(
                //                                         {_id: new ObjectID("5a2fef15d3abb51dd0fbaf2a")},
                //                                         {$set:
                //                                         {
                //                                             name: 'Halle Berry',
                //                                             age: 51,
                //                                             location: 'LALA'}
                //                                         }, 
                //                                         {returnOriginal: false})
                //                         .then((res) => { 
                //                         console.log(res);

                // });

                db.collection('Users').findOneAndUpdate({_id: new ObjectID("5a3101820c911519ecf3c8f2")},{
                    $set: 
                    {
                        name: "Jessica Alba",
                        location: 'Hollywood'
                    },
                    $inc: {age: -13},
                }, {returnOriginal: false})
                .then((res) => {console.log(res)}, (err) => {
                    console.log(err);

                });

            client.close();


            });

mongoCommand.listCollection('ToDoApp', 'Users', MongoClient, urlstr);