//Creating group Schema
const mongoose = require("mongoose")
const User = require("../models/userModel");


const groupSchema = mongoose.Schema({
    gname: {
        type: String,
        required: true
    },
    members:[
        {
            type:mongoose.Schema.ObjectId,
            ref: User
        }
    ]
    
})

module.exports = mongoose.model("Group", groupSchema);