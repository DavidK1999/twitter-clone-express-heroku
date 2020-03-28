require('dotenv').config();
// const cors = require('cors')
const express = require('express')
let path = require('path')
const app = express()
const port = process.env.PORT
const passport = require('passport')
require('./db/db.js')

// app.use(cors())
// app.options('*', cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(passport.initialize())
app.use(express.static(path.join(__dirname, 'build')))


const userRoutes = require('./routes/user')
const cardRoutes = require('./routes/card')
const authRoutes = require('./routes/auth')

// * Middleware
app.use(express.json())

// * Route Middleware
app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/card', cardRoutes)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(port, (req, res) => console.log('Listening on port', port))


