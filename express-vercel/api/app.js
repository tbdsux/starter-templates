// initialize the .env config file
require('dotenv').config()

// main express
const express = require('express')
const app = express()

// other required
const path = require('path')
const bodyParser = require('body-parser')

// date parser
const moment = require('moment')

// set the view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'twig')

// set other things
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }))

// check if the env is set
if (!process.env.MONGO_DB) {
  console.log('The MONGO_DB environment variable is not set!')
  process.exit(0) // exit
}

// require the database connection
const ConDB = require('./db')

// set the webapp title
const websiteTitle = 'A Serverless App'

// default index route
app.get('/', async (req, res) => {
  res.render('index', { title: websiteTitle })
})

// export the app
module.exports = app
