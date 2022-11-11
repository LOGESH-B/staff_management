const express=require('express')    
const router = express.Router()

//controllers import
const {newAchive,allachievement} =require('../controllers/achievement_controller')


router.post('/newachievement/:id',newAchive)
router.get('/getallachievement',allachievement)

module.exports = router ;