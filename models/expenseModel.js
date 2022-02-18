const mongoose = require('mongoose');
const User = require("../models/userModel");
const Group = require("../models/groupModel");

//defining Schema
const expenseSchema = mongoose.Schema({
    
    groupId:{
        type:mongoose.Schema.ObjectId,
        ref: Group
    },
    from:{
        type:mongoose.Schema.ObjectId,
        ref: User
    },
    to:{
        type:mongoose.Schema.ObjectId,
        ref: User
    },
    amount:{
        type: Number
    },
    
})

//exporting schema
module.exports = mongoose.model("Expense", expenseSchema);