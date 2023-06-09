const rentRouter = require('express').Router()

const rentCtrl = require('../controller/rentController')

const authMiddleware = require('../middleware/authMiddleware')

const adminAuth = require('../middleware/adminAuth')

rentRouter.get('/all' ,rentCtrl.getAll)
rentRouter.get('/single/:id' ,rentCtrl.getSingle)
rentRouter.post('/create' ,rentCtrl.create)
rentRouter.patch('/update/:id' ,rentCtrl.update)
rentRouter.delete('/delete/:id' ,rentCtrl.delete)

module.exports = rentRouter



// ,authMiddleware,adminAuth
// ,authMiddleware,adminAuth
// ,authMiddleware,adminAuth
// ,authMiddleware,adminAuth
// ,authMiddleware,adminAuth