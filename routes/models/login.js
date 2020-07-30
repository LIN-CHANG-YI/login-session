const express = require('express')
const User = require('../../models/user.js')
const router = express.Router()

router.get('/', (req, res) => {
  const firstName = req.session.user
  res.render('loginPass', { firstName })
})

router.post('/', (req, res) => {
  const { email, password } = req.body
  User.find({ email: `${email}`, password: `${password}` })
    .then((user) => {
      if (user.length === 0) {
        req.session.alert = `Email or Password error!` //設置session
        req.session.email = email
        req.session.password = password
        return res.redirect('/')
      } else {
        req.session.user = user[0].firstName
        return res.redirect('/login')
      }
    })
    .catch(error => console.log(error))
})

module.exports = router