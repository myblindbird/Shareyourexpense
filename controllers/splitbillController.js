const splitbill = require("../models/splitbillModel");
const User = require("../models/userModel");
const Group = require("../models/groupModel");


const split = (req,res)=>{
    const newsplitbill = new splitbill(req.body);

    const amount = req.body.amount;
    const paidbyId = req.body.paidBy;
    const sharedById = req.body.sharedBy;
    const expenseType = req.body.expenseType;
    
    //saving the data in database and sending response
    newsplitbill
    .save()
    .then((split)=>{
        res.status(200).json({
            result: "Success",
            split: split,
            message: `Split Bill Info Updated Successfully`
        })
    })
    .catch((err)=>{
        res.status(400).json({result: "Error", message: `Some Error Occured..`});
    })

    //calculating Expense base on Expense Type
    const calculateExp = async()=>{

        //for equal split
        if(expenseType == "EQUAL"){
            
            //calculating contro for each member
            var contro = amount/(sharedById.length +1);

            //rounding off the value
            contro = Math.round(contro * 100) / 100;
            console.log(contro)

            //updating amounts in database
            const payee = await User.findById(paidbyId);
            console.log(payee);
        }

        //for percent split
        else if(expenseType == "PERCENT"){

            //calculating contro for each member
            var contro = amount/(sharedById.length +1);

            //rounding off the value
            contro = Math.round(contro * 100) / 100;
            console.log(contro)

            //updating amounts in database
            const payee = await User.findById(paidbyId);
            console.log(payee);
        }
        
        //for exact split
        else{
            //calculating contro for each member
            var contro = amount/(sharedById.length);

            //rounding off the value
            contro = Math.round(contro * 100) / 100;
            console.log(contro)

            //updating amounts in database
            const payee = await User.findById(paidbyId);
            console.log(payee);
        }
    
        
    }
}
module.exports = {split};
