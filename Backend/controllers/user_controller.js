
//basic imports
const bcrypt = require('bcryptjs')
const User = require('../models/user')
const NewAchievement = require("../models/achievements")
const Admin = require('../models/admin')
const jwt = require('jsonwebtoken')

module.exports.newUser = (req, res) => {
    const newuser = new User({ ...req.body });
    console.log(newuser);
    newuser.save();
}

module.exports.getalluser = async (req, res) => {
    const alluser = await User.find({});
    console.log(alluser)
    res.json(alluser)
}
module.exports.userprofile = async (req, res) => {
    const alluser = await User.findOne({ _id: req.params.id }).populate('achivements');
    console.log(alluser)
    res.json(alluser)
}


module.exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existinguser = await Admin.findOne({ email })
        if (!existinguser) {
            console.log("User not found...");
            return res.status(404).json({ message: "User not found..." })
        }
        const isPasswordCrt = await bcrypt.compare(password, existinguser.password)
        if (!isPasswordCrt) {
            return res.status(400).json({ message: "Invalid credentials" })
        }

        const token = jwt.sign({ email: existinguser.email, id: existinguser._id }, 'token', { expiresIn: '48h' })
        const data = { name: existinguser.name, email: existinguser.email, token: token }
        res.status(200).json(data)

    } catch (err) {
        console.log(err.message)
        res.status(500).json(err.message)
    }
}


module.exports.signUp = async (req, res) => {
    const { name, email, password } = req.body
    try {
        const existinguser = await Admin.findOne({ email })

        if (existinguser) {
            return res.status(400).json({ message: 'User already found..' })
        }
        const hashPassword = await bcrypt.hash(password, 12);
        const newUser = new Admin({ name, email, password : hashPassword })
        await newUser.save();
        const token = jwt.sign({ email: newUser.email, id: newUser._id }, 'token', { expiresIn: '1h' })
        const data = { name: newUser.name, email: newUser.email, token: token }
        console.log(token)
        res.status(200).json(data)
    } catch (err) {
        console.log(err.message)
        res.status(500).json('Something went worng...')
    }
}