const User = require("../models/userModel");

//function to create new user and validation
const createuser = ()=>{
    const newUser = new User(req.body);
    newUser.save()
}
module.exports = {createuser};
