const mongoose = require('mongoose');
const {Schema}=mongoose


const achievementSchema=new Schema({
   title:{
    type:String,
    required:true
   },
   year:{
    type:String,
    required:true
   },
   recognitions:{
    type:String,
    default:"-"
   }
    
})





module.exports= mongoose.model("Achievements", achievementSchema);