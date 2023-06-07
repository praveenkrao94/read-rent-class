const express = require('express')


require('dotenv').config()
const port = process.env.PORT

const connectDb = require('./db/connect')

const cors = require('cors')

const cookieparser = require('cookie-parser')

const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

//middleware
app.use(cors())   // this helps the backend to allow the request that is sent from front end 

app.use(cookieparser(process.env.SECRET_TOKEN))  //When a client (such as a web browser) sends an HTTP request to your Node.js server, it may include one or more cookies in the request headers. These cookies can contain data that you can use to identify and track users, store session information, or implement various features in your application.

//In backend programming, cookies are small pieces of data that are stored on the user's computer by the web server. Cookies are primarily used to track and maintain information about the user's interaction with a website. They enable the server to remember certain user-specific details and provide personalized experiences.

app.use('/api/v1/auth', require('./Route/authRoute'))
app.use('/api/category', require('./Route/categoryRoute'))
app.use('/api/book' , require('./Route/bookRoute'))

app.all('**', async (req, res) => {
    return res.status(404).json({ msg: `Requested path not Found` })
})

app.listen(port, async () => {
    console.log(`listed on http://localhost:${port}`)
    await connectDb()
})

