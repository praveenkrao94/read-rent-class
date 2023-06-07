const bookRoute = require('express').Router()

const Bookctrl = require('../controller/bookController')


bookRoute.get('/all' , Bookctrl.getAll)
bookRoute.get('/single/:id' , Bookctrl.getSingle)
bookRoute.post('/create' , Bookctrl.create)
bookRoute.patch('/update/:id' , Bookctrl.update)
bookRoute.delete('/delete/:id' , Bookctrl.delete)


module.exports = bookRoute