
//basic imports
const bcrypt = require('bcryptjs')
const User = require('../models/user')
const NewAchievement = require("../models/achievements")

module.exports.newUser = (req, res) => {
    const newuser = new User({ ...req.body });
    console.log(newuser);
    newuser.save();
}

module.exports.getalluser=async (req,res)=>{
    const alluser= await User.find({});
    console.log(alluser)
    res.json(alluser)
}

module.exports.login = (req, res) => {
    const data = {
        email: req.body.email,
        password: req.body.password
    }
    console.log(data);
}