const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: true
    },
    lastName : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    password : {
        type: String,
        unique: true,
        required: true
    },
    createdDate: { type: Date, default: Date.now}
});
module.exports = mongoose.model('register',userSchema)