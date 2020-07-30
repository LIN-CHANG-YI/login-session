const express = require('express')
const User = require('../../models/user.js')
const router = express.Router()
const session = require('express-session') //載入express-session
const MongoStore = require('connect-mongo')(session); //載入connect-mongo
router.use(session({
  secret: 'hello',
  resave: true,
  rolling: false,
  saveUninitialized: true,
  store: new MongoStore({ url: 'mongodb://localhost:27017/sessiondb' }), //使用mongodb儲存
  cookie: { httpOnly: true, maxAge: 5000 } //30秒清除session
}))


router.get('/', (req, res) => {
  const { user, alert, email, password } = req.session
  if (user) { //驗證user session是否還在(登入狀態),若還在轉跳login路由
    return res.redirect('/login')
  }
  res.render('index', { alert, email, password }) //若user session不存在,則顯示登入畫面
})

router.post('/', (req, res) => {
  req.session.destroy() //銷毀session
  res.redirect('/')
})

module.exports = router