const express=require('express')    
const router = express.Router()

//controllers import
const {newAchive,allachievement,deleteachievement} =require('../controllers/achievement_controller')


router.post('/newachievement/:id',newAchive)
router.get('/getallachievement',allachievement)
router.get('/:id/delete',deleteachievement)

module.exports = router ;