const rentRouter = require('express').Router()

const rentCtrl = require('../controller/rentController')

const authMiddleware = require('../middleware/authMiddleware')

const adminAuth = require('../middleware/adminAuth')

rentRouter.get('/all' ,authMiddleware,adminAuth,rentCtrl.getAll)
rentRouter.get('/single/:id' ,authMiddleware,adminAuth,rentCtrl.getSingle)
rentRouter.get('/create' ,authMiddleware,adminAuth,rentCtrl.create)
rentRouter.get('/update/:id' ,authMiddleware,adminAuth,rentCtrl.update)
rentRouter.get('/delete/:id' ,authMiddleware,adminAuth,rentCtrl.delete)