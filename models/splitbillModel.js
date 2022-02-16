//Creating Expense Schema
const mongoose = require("mongoose");
const User = require("./userModel");
const Group = require("./groupModel");

const splitbill = mongoose.Schema({
    gname:[{
        type: mongoose.Schema.ObjectId,
        ref: Group
    }],
    expenseType:{
        type: String,
        enum: ["EXACT", "PERCENT", "EQUAL"],
        default: "EQUAL"
    },
    paidBy:[{
        type: mongoose.Schema.ObjectId,
        ref: User
    }],
    amount: {
        type: String,
        require: true
    },

    lentBy:[
        {
            type:mongoose.Schema.ObjectId,
            ref: User
        }
    ]
})



module.exports = mongoose.model("splitbill", splitbill);