const express=require('express')    
const router = express.Router()

//controllers import
const {newUser,login,getalluser} =require('../controllers/user_controller')


router.post('/newuser',newUser)

router.get('/getalluser',getalluser)

router.post('/login',login)


module.exports = router ;