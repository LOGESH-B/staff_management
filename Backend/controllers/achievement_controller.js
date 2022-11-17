//basic imports
const bcrypt = require('bcryptjs')
const Achievement=require("../models/achievements")
const User=require("../models/user")

module.exports.newAchive= async(req,res)=>{
    console.log(req.params)
    const newachive=new Achievement({...req.body});
    newachive.achiever_id=req.params.id;
    const finduser=await User.findOne({_id:req.params.id})
    finduser.achivements.push(newachive._id)
    finduser.save()
    newachive.save()
}
module.exports.allachievement=async(req,res)=>{

    const data=await Achievement.find({}).populate('achiever_id');
    const userdata=await User.find({});
    res.json({achivement:data,user:userdata})
    // console.log(data)
}

module.exports.deleteachievement=async(req,res)=>{
    const {id}=req.params
    console.log(id)
    const result=await Achievement.findByIdAndDelete(id)
    if(result)res.json({message:'deleted'})
    else res.json({message:'error'})
}