const express = require('express')
const home = require('./models/home.js')
const login = require('./models/login.js')

const router = express.Router()

router.use('/', home)
router.use('/login', login)

module.exports = router