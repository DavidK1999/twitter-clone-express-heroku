const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {registerValidation, loginValidation} = require('../validation')


router.post('/register', async (req, res) => {

    const userExists = await User.findOne({email: req.body.email})
    if(userExists) res.status(400).send({status: 400, message: "A user with this email or username already exists"})

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
    })
    try {
        const savedUser = await user.save()
        savedUser.password = undefined
        const token = jwt.sign({username: savedUser.username}, process.env.ACCESS_TOKEN_SECRET)
        res.header('auth-token', token).send({token, status: 200, user: user.username})
    } catch (error) {
        console.log(error)
    }
})

router.post('/login', async (req, res) => {
    console.log('Hi')
    try {
        const user = await User.findOne({email: req.body.email})
        if(!user) return res.status(400).send({status: 400, message: 'Incorrect email or password'})
    
    
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if(!validPassword) return res.status(400).send('Incorrect password')
    
        const token = jwt.sign({username: user.username}, process.env.ACCESS_TOKEN_SECRET)
        
        res.header('auth-token', token).send({token, status: 200, user: user.username})
    } catch (error) {
        console.lor(error)
    }
})

module.exports = router


