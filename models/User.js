const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    zipcode: {
        type: Number,
        required: true
    },
    following: [{
        type: String,
        default: "Employee"
    }],
    socials: [{
        type: String,
        default: null
    }],
    comments: [{
        type: String,
        default: null
    }],
    active: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('User', userSchema)