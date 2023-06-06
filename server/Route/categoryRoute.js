const categoryRoute = require('express').Router()

const categoryCtrl = require('../controller/categorycontroller')


categoryRoute.get('/all' , categoryCtrl.getall)
categoryRoute.get('/single/:id' , categoryCtrl.getSingle)
categoryRoute.post('/create' , categoryCtrl.create)
categoryRoute.patch('/update/:id' , categoryCtrl.update)
categoryRoute.delete('/delete/:id' , categoryCtrl.delete)

module.exports = categoryRoute