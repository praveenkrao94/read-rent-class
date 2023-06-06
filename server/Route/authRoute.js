const authRouter = require('express').Router()

const authContoller = require('../controller/authController')

const authMiddleware = require('../middleware/authMiddleware')

authRouter.post('/register', authContoller.register)
authRouter.post('/login', authContoller.login)
authRouter.get('/logout', authContoller.logout)
authRouter.get('/current/user', authMiddleware, authContoller.currentUser)
authRouter.get('/token', authContoller.authToken)


module.exports = authRouter