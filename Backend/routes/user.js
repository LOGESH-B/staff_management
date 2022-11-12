const express=require('express')    
const router = express.Router()

//controllers import
const {newUser,login,getalluser,userprofile} =require('../controllers/user_controller')


router.post('/newuser',newUser)

router.get('/getalluser',getalluser)
router.get('/userProfile/:id',userprofile)

router.post('/login',login)


module.exports = router ;