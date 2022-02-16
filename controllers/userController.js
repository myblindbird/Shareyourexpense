const User = require("../models/userModel");


//function to create new user and validation
const createuser = (req,res)=>{
    const newUser = new User(req.body);
    // console.log(req.body);
    newUser
    .save()
    .then((user)=>{
        // console.log("USer is created...")
        res.status(200).json({
            result: "Success",
            user: user,
            message: `User created Successfully.`
        })
    })
    .catch((err)=>{
        res.status(400).json({result: "Error", message: `Some Error Occured..`});
    })
}
module.exports = {createuser};
