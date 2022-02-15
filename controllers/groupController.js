const Group = require("../models/groupModel");

//function to create new user and validation
const creategroup = ()=>{
    const newGroup = new Group(req.body);
    newGroup.save()
}
module.exports = {creategroup};
