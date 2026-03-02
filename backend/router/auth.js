const express = require('express')
const router = express.Router()
const {protectjwt}=require('../middleware/authmiddleware')
const {register, login}=require('../controller/auth')


router.post('/register',register)
router.post('/login',login)



router.get('/profile', protectjwt, (req, res) => {
    res.json({ user: req.user })
})

module.exports=router
