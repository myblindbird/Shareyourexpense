const mongoose = require("mongoose")

//defining Schema
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
    },
    giveto:{
        type: String
    },
    //how to take push json in row
    takefrom:{
        type: Object
    },
    youPaid:{
        type: Number
    },

})

//exporting schema
module.exports = mongoose.model("User", userSchema);

