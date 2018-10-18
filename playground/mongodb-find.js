// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID}  = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  //
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });
  //
  // db.collection('Todos').find({
  //   _id: new ObjectID('5bc7e39c92517ea23e01c12d')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

db.collection('Users').find({name: 'Joel'}).toArray().then((docs) => {
  console.log(JSON.stringify(docs, undefined, 2));
});

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined , 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Joel',
  //   age: 27,
  //   location: 'FL'
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert Users', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});
