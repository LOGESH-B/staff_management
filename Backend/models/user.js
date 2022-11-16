const mongoose = require('mongoose');
const { Schema } = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    achivements: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Achievements' }],
    experiance: { type: Number },
    department: { type: String, required: true },
    rank: { type: String, required: true }

})




module.exports = mongoose.model("User", userSchema);