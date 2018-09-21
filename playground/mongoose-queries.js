const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5ba2c5e5afb8e90a2029d418';

if(!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

User.find({
    _id: id
}).then((user) => {
    if(!user) {
        return console.log('User not found');
    }
    console.log('User:', user);
});

User.findOne({
    _id: id
}).then((user) => {
    if(!user) {
        return console.log('User not found');
    }
    console.log('User', user);
});
User.findById(id).then((user) => {
    if(!user) {
        return console.log('User not found');
    }
    console.log(user);
}).catch((e) => console.log(e));




// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));