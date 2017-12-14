const {MongoClient, ObjectID} = require('mongodb');
const urlstr = require('./mongodb-uri').uri();

MongoClient.connect(urlstr, (err, client) => {

            var db = client.db('ToDoApp');

            if (err) {
            return console.log('Unable to connect to server', err);
                }
            

            console.log('Connected to MongoDB Atlas');
                
            // FIND - return all records
            // db.collection('Todos').find(
            //                             {_id: new ObjectID('5a310f70a930b16cb211d4ca')
            //                             })
            //                     .toArray().then((docs) => {
            //                     console.log(JSON.stringify(docs, undefined, 2));

            // }, 
            //                     (err) => {console.log('Unable to fetch data')}
            
        

        
        // );

            // COUNT
            db.collection('Todos').count().then((count) => {
                console.log(`${count} records in Todos collection.`)  
            }, (err) => {
                console.log('Error, could not find records');

            }

            );  
              
            db.collection('Users').find({name: 'Karrueche'})
            .toArray()
            .then((docs) => {
                var x = docs.length;
                console.log(`Found ${x} records \n`, JSON.stringify(docs, undefined, 2));
                
            }, (err) => {
                console.log(err);
            });

            client.close();




});

