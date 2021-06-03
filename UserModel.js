const mongoose = require('mongoose')

const UserModel = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    role: {type: String, required: true},
    picture: {type: String}
})

module.exports = mongoose.model('UserModel', UserModel)