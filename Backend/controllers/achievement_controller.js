//basic imports
const bcrypt = require('bcryptjs')
const NewAchievement=require("../models/achievements")
const User=require("../models/user")

module.exports.newAchive= async(req,res)=>{
    console.log(req.params)
    const newachive=new NewAchievement({...req.body});
    newachive.achiever_id=req.params.id;
    const finduser=await User.findOne({_id:req.params.id})
    finduser.achivements.push(newachive._id)
    finduser.save()
    newachive.save()
}

module.exports.allachievement=async(req,res)=>{

}