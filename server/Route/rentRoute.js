const rentRouter = require('express').Router()

const rentCtrl = require('../controller/rentController')

const authMiddleware = require('../middleware/authMiddleware')

const adminAuth = require('../middleware/adminAuth')

rentRouter.get('/all' ,authMiddleware,adminAuth,rentCtrl.getAll)
rentRouter.get('/single/:id' ,authMiddleware,adminAuth,rentCtrl.getSingle)
rentRouter.post('/create',authMiddleware,adminAuth ,rentCtrl.create)
rentRouter.patch('/update/:id',authMiddleware,adminAuth ,rentCtrl.update)
rentRouter.delete('/delete/:id',authMiddleware,adminAuth ,rentCtrl.delete)

module.exports = rentRouter



// ,authMiddleware,adminAuth
// ,authMiddleware,adminAuth
// ,authMiddleware,adminAuth
// ,authMiddleware,adminAuth
// ,authMiddleware,adminAuth