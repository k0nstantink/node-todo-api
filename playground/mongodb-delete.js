const {MongoClient, ObjectID} = require('mongodb');
const urlstr = require('./mongodb-uri').uri();
const mongoCommand = require('./mongodb-commands');




MongoClient.connect(urlstr, (err, client)=>{
    db = client.db('ToDoApp');
    if (err) {
        return console.log('Cannot connect to MongoDB Atlas');
    }

    // deleteMany

    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((res)=>{
    //     console.log(res);
    // });

    // deleteOne

    // db.collection('Todos').deleteOne({text: 'More stuff that needs doing.'}).then((res) => {console.log(res);});
    
    // findOneAndDelete
     db.collection('Users').findOneAndDelete({_id: 1}).then((res) => {
        console.log(res);


     });

    

    
    client.close();

});

mongoCommand.listCollection('ToDoApp', 'Users', MongoClient, urlstr);
mongoCommand.listCollection('ToDoApp', 'Todos', MongoClient, urlstr);