const express = require('express')
const router = express.Router()
const verify = require('../verifyToken')
const Card = require('../models/Card')
const User = require('../models/User')

const ownsIt = (user, collection) => {
    for(let card of collection) {
        if(user.username === card.user_username) {
            card.verified = true
        }
    }
}

const upvotedIt = (user, collection) => {
    for(let card of collection) {
        console.log(user.username)
        if(card.upvotes.includes(user.username)) {
           card.upvoted = true
        }
    }
}

const upvotedItLikes = collection => {
    for(let card of collection) {
        if(card.upvotes.length !== 0) {
            card.upvoted = true
        }
    }
}

router.get('/all', verify , async (req, res) => {
    try {
        let allCards = await Card.find()
        ownsIt(req.user, allCards)
        upvotedIt(req.user, allCards)
        console.log(allCards)
        res.send(allCards)
    } catch (error) {
        console.log(error)
    }
})

router.get('/personal', verify , async (req, res) => {
    try {
        console.log("PERSONAL")
        let user = await User.findOne({"username": req.user.username})
        let personalCards = await Card.find({$or: [{"user_username": req.user.username}, {"user_username": {$in: user.following}}]})
        console.log(personalCards)
        ownsIt(req.user, personalCards)
        upvotedIt(req.user, personalCards)
        res.send(personalCards)
    } catch (error) {
        console.log(error)
    }
})

router.get('/profile/:username', verify , async (req, res) => {
    try {
        let profileCards = await Card.find({user_username: req.params.username})
        ownsIt(req.user, profileCards)
        upvotedIt(req.user, profileCards)
        res.send(profileCards)
    } catch (error) {
        console.log(error)
    }
})

router.get('/likes/:username', verify , async (req, res) => {
    try {
        console.log("LIKES")
        let likedCards = await Card.find({"upvotes" : {$in: [req.params.username]}})
        ownsIt(req.user, likedCards)
        upvotedItLikes(likedCards)
        console.log(likedCards)
        res.send(likedCards)
    } catch (error) {
        console.log(error)
    }
})

router.post('/post', verify, async (req, res) => {
    try {
        req.body.user_username = req.user.username
        const newCard = await Card.create(req.body)
        res.json(newCard)
    } catch (error) {
        console.log(error)
    }
})

router.put('/upvote/:cardID', verify, async (req, res) => {
    try {
        let upvotedCard = await Card.findByIdAndUpdate(req.params.cardID, 
            {$addToSet: {"upvotes": req.user.username}}, {new: true}
        )
        req.user.username === upvotedCard.user_username ? upvotedCard.verified = true : upvotedCard.verified = false
        upvotedCard.upvotes.includes(req.user.username) ? upvotedCard.upvoted = true : upvotedCard.upvoted = false
        res.send(upvotedCard)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router