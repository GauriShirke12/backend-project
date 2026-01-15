const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myapp');

const userSchema = new mongoose.Schema({

    image: String,
    name: String,
    email: String
})

module.exports = mongoose.model('User', userSchema);