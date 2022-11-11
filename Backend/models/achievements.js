const mongoose = require('mongoose');
const { Schema } = mongoose


const achievementSchema = new Schema({
   achiever_id: {
      type: mongoose.Schema.Types.ObjectId, ref: 'User',
      required: true

   },
   title: {
      type: String,
      required: true
   },
   year: {
      type: String,
      required: true
   },
   recognitions: {
      type: String,
      default: "-"
   }

})





module.exports = mongoose.model("Achievements", achievementSchema);