const express=require('express')    
const router = express.Router()

//controllers import
const {newUser,login,signUp,getalluser,userprofile} =require('../controllers/user_controller')


router.post('/newuser',newUser)

router.get('/getalluser',getalluser)
router.get('/userProfile/:id',userprofile)

router.post('/login',login)
router.post('/signup',signUp)


module.exports = router ;