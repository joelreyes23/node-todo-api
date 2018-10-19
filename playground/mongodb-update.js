// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//findOneandUpate

// db.collection('Users').findOneAndUpdate({
//   _id: new ObjectID("5bc676e2e48d6823a3578f53")
// }, {
//   $set: {
//     completed: false
// }
// }, {
// returnOriginal:true
// }).then((result) => {
//   console.log(result);
// });


db.collection('Users').findOneAndUpdate({
  _id: new ObjectID("5bc67e7e97864325a3ab5d98")
}, {
  $set: {
    name: "Joel"
},
  $inc: {
    age: 1
  }
}, {
returnOriginal:false
}).then((result) => {
  console.log(result);
});

  // db.close();
});
