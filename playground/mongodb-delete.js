// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true }, (err, client) => {
    if(err) {
        return console.log('Unable to connect to mongodb server.');
    }
    console.log('Connected to MongoDB Server');

    const db = client.db('TodoApp');

    //deleteMany
    db.collection('Users').deleteMany({name: 'Nathan'}).then((result) => {
        console.log(result);
    });
    //deleteOne
    db.collection('Users').deleteOne({_id: new ObjectID('5ba2b22cfaf7273480c734f4')}).then((result) => {
        console.log(result);
    });
    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    });

    // client.close();
});
