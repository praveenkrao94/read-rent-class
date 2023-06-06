const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        default: ''
    },
    validateEmail: {
        type: Boolean,
        default: false
    },
    validateMobile: {
        type: Boolean,
        default: false
    },
    image: {
        type: Object,
        default: {}

    },
    role: {
        type: String,
        default: "user"
    },
    isActive: {
        type: Boolean,
        default: true
    },
}, {
    collection: 'users',
    timestamps: true
})


module.exports = mongoose.model("User", userSchema)