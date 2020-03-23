require('dotenv').config();
const express = require('express')
let path = require('path')
const app = express()
const port = process.env.PORT
const passport = require('passport')
require('./db/db.js')


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://twitter-clone-lite.herokuapp.com');
 
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
 
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'auth-token');
 
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
 
    // Pass to next layer of middleware
    next();
 });

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


