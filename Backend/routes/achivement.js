const express=require('express')    
const router = express.Router()

//controllers import
const {newAchive} =require('../controllers/achievement_controller')


router.post('/newachievement',newAchive)

module.exports = router ;