// to hide environment variables
require('dotenv').config()

// require express
const express = require('express')
// require join for middleware
const { join } = require('path')

// require syncDB from the database
const syncDB = require('./db')

// create a new express application
const app = express()

// middleware
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// app use the routes
app.use(require('./routes'))

// sync database and listen on port (deployed to Heroku) or local port 3000
syncDB()
 .then(() => app.listen(process.env.PORT || 3000))
 .catch(err => console.log(err))