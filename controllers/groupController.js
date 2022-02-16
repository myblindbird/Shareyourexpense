const Group = require("../models/groupModel");
const User = require("../models/userModel");

//function to create new group 

const creategroup = async (req,res)=>{
    let members = req.body.members;
    members.push(req.params.userId);
    const newGroup = new Group(
        {
            "gname": req.body.gname,
            "members": members
        }
    );
    newGroup
    .save()
    .then((group)=>{
        let memArray = [];
        const members = req.body.members;
        members.forEach(async id => {
            const memName = await User.findById(id);
            memArray.push(memName.name);
            console.log(memArray);
        });
        res.status(200).json({
            result: "Success",
            // group: group,
            message: `Group created Successfully.`
        })
    })
    .catch((err)=>{
        console.log("Inside catch")
        res.status(400).json({result: "Error", message: `Some Error Occured..`});
    })
    
}
module.exports = {creategroup};
