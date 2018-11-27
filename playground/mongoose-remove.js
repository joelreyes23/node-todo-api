const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });


// Todo.findOneAndRemove

// Todo.findOneAndRemove({_id: '5bfd4ba7db97934694d68ef2'}).then((todo) => {
//
// });

//Todo.findByIdAndRemove


Todo.findByIdAndRemove('5bfd4ba7db97934694d68ef2').then((todo) => {
  console.log(todo);
});
