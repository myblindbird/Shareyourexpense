//Creating Expense Schema
const mongoose = require("mongoose")
const expense = mongoose.Schema({
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
    }
})

module.exports = mongoose.model("expense", expense);