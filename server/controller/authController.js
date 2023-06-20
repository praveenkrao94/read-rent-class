const User = require('../model/userModel')

const bcrypt = require('bcryptjs')

const { createLoginToken } = require('../util/token')

const jwt = require('jsonwebtoken')

const authContoller = {

    register: async (req, res) => {
        try {
            const { name, email, mobile, password } = req.body
            // res.json({ data: req.body })

            const enPass = await bcrypt.hash(password, 10)

            //check email 
            const extemail = await User.findOne({ email })
            if (extemail)
                return res.status(400).json({ msg: `${email} already exist` })

            //check mobile
            const extMobile = await User.findOne({ mobile })
            if (extMobile)
                return res.status(400).json({ msg: `${mobile} Number already exist` })


            const newUser = await User.create(
                {
                    name,
                    email,
                    mobile,
                    password: enPass
                }
            )

            res.json({ msg: "register successfully", data: newUser })
        }
        catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    login: async (req, res) => {

        try {
            const { email, password } = req.body

            const extuser = await User.findOne({ email })
            if (!extuser)
                return res.status(404).json({ msg: `${email} dosent exist` })

            const passwordMatch = await bcrypt.compare(password, extuser.password)
            if (!passwordMatch)
                return res.status(401).json({ msg: "Password Doest match" })

            //check if active

            if (!extuser.isActive)
                return res.json({ msg: `Hi ${extuser.name}Your Account has been blocked and is no longer active` })

            const token = createLoginToken({id: extuser._id })

            /// save token in cookie
            res.cookie("loginToken", token, {  // loginToken is the name of the cookie
                httpOnly: true,
                signed: true,
                path: `/api/v1/auth/token`,
                maxAge: 1 * 24 * 60 * 60 * 1000

            })

            // what are cookie:- 

            //In backend programming, cookies are small pieces of data that are stored on the user's computer by the web server. Cookies are primarily used to track and maintain information about the user's interaction with a website. They enable the server to remember certain user-specific details and provide personalized experiences.

            res.json({ msg: "login Successfull", token })
        }
        catch (err) {
            res.status(500).json({ msg: err.message })
        }

    },


    logout: async (req, res) => {
        try {
            res.clearCookie('loginToken', { path: `/api/v1/auth/token` })
            res.json({ msg: 'Logout Successfull' })

        }
        catch {

            return res.status(500).json({ msg: err.message })
        }
    },
    currentUser: async (req, res) => {
        try {
          
            const data = await User.findById({_id:req.user.id}).select('-password')
            if(!data)
            return res.status.json({msg:"Requested user not found"})

            res.json({currentUser:data})
        }
        catch (err){
            return res.status(500).json({ msg: err.message })

        }
    },
    authToken: async (req, res) => {
        try {
            const cToken = req.signedCookies.loginToken   // secured cookie -- this is cookie parser -- secure cookie
            if (!cToken)
                return res.status(404).json({ msg: "token not Found , Session Expired" })

                // verify login token  //

                jwt.verify(cToken,process.env.SECRET_TOKEN,(err,user)=>{
                    if(err)
                    return res.status(400).json({msg:'Invalid Token .. Un Authorized'})

                      

                    const rToken = createLoginToken({id:user.id})

                    res.json({authToken : rToken })
                })

            // res.json({ cToken })
        }
        catch (err) {
            return res.status(500).json({ msg: err.message })

        }
    },
    allUsers: async (req,res) => {
        try {
            const data = await User.find()

            const users = data.filter(item => item.role !== "superadmin")
            
            return res.status(200).json({ length: users.length, users })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }

}


module.exports = authContoller