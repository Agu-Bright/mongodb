var mongodb = require('mongo');
var server = new mongodb.server('127.0.0.1', 27017, {});
var client = new mongodb.Db('mydatabase', server, {w:1});

client.open((err)=>{
    if(err){
        client.collection('test_insert', (err, collection)=>{
            if(err) throw err;
            console.log('We are now able to perform queries');
        });
    }
})

//INSERTING A DOCUMENT INTO A COLLECTION
//The following code inserts a document into a collection and prints its  unique document ID;

collection.insert(
    {
        'title': 'I like cake',
        'Body': 'It is quite good.'
    },
    {safe : true},
    (err, documents)=>{
        if (err) throw err;
        console.log('Document ID is: ' + documents[0]._id);
    }
)