//Creating User Schema for new user
const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    email:{
        type: String,
        require: true,
        // unique: true,
    },
    fname:{
        type: String,
        require: true,
        trim: true
    },
    lname:{
        type: String,
        require: true,
        trim: true
    },
    mobile:{
        type: Number,
        require: true,
        // unique: true,
        maxlength: 10
    }


})

module.exports = mongoose.model("User", userSchema);