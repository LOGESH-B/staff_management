
//Basic imports
const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require("path")
const dotenv = require('dotenv')
const cors= require('cors')

//models
const User=require("./models/user")
const NewaAchievement=require("./models/achievements")

//routes import
const userRoutes = require('./routes/user')
const achievementRoutes = require('./routes/achivement')


//initilizing
const app = express()
app.use(cors({
    origin:'*',
    credentials:true
}))
app.use(express.static(path.join(__dirname, "/public")))
dotenv.config()
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db=process.env.DB || "mongodb://localhost:27017/UID"

//db connection
mongoose.connect(db).then(() => {
    console.log(`Db connection open : ${db}`)
}).catch(err => {
    console.log(err.message, 'oops err');
});


//routers
app.use('/user', userRoutes)
app.use('/achievement', achievementRoutes)




//listening port
//port
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Server is running at Port ${PORT}`)
}
)
