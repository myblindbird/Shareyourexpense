const splitbill = require("../models/splitbillModel");


const split = ()=>{
    const newsplitbill = new splitbill(req.body);
    console.log(newsplitbill);
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
}
module.exports = {split};
