const express = require('express')
const User = require('../../models/user.js')
const router = express.Router()
const cookieParser = require('cookie-parser')
router.use(cookieParser())


router.get('/', (req, res) => {
  const alert = req.cookies.alert
  res.render('index', { alert })
})

router.post('/', (req, res) => {
  res.clearCookie('user', { httpOnly: true })
  res.clearCookie('alert', { httpOnly: true })
  res.redirect('/')
})

module.exports = router