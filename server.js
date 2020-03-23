require('dotenv').config();
const express = require('express')
let cors = require('cors')
let path = require('path')
const app = express()
const port = process.env.PORT
const passport = require('passport')
require('./db/db.js')

const allowedOrigins = ['http://localhost:8000', 'http://localhost:8000/api/user', 'https://twitter-clone-lite.herokuapp.com']

app.use(cors({
    origin: function(origin, callback) {
        if(!origin) return callback(null, true)
        if(allowedOrigins.indexOf(origin) !== -1) {
            let msg = 'Not allowed by cors'
            return callback(new Error(msg), false)
        }

        return callback(null, true)
    }
}))

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

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(port, (req, res) => console.log('Listening on port', port))


