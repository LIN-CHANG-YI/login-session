const express = require('express')
const User = require('../../models/user.js')
const cookieParser = require('cookie-parser')
const router = express.Router()
router.use(cookieParser())

router.get('/', (req, res) => {
  const firstName = req.cookies.user
  res.render('loginPass', { firstName })
})

router.post('/', (req, res) => {
  const { email, password } = req.body
  User.find({ email: `${email}`, password: `${password}` })
    .then((user) => {
      if (user.length === 0) {
        const alert = `Email or Password error!`
        res.cookie('alert', alert)
        return res.redirect('/')
      } else {
        //maxAge:設定登入時間後多久清除cookie,單位(ms),此設置1分鐘
        //如果maxAge沒有設定,關掉瀏覽器cookie直接清除
        res.cookie("user", user[0].firstName, { httpOnly: true, maxAge: 60000 })
        return res.redirect('/login')
      }
    })
    .catch(error => console.log(error))
})

module.exports = router