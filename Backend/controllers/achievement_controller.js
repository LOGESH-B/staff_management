//basic imports
const bcrypt = require('bcryptjs')
const NewAchievement=require("../models/achievements")

module.exports.newAchive=(req,res)=>{
    const newachive=new NewAchievement({...req.body});
    console.log(newachive);
}