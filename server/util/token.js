const jwt = require('jsonwebtoken')

const createLoginToken = (id) => {
    return jwt.sign(id, process.env.SECRET_TOKEN, { expiresIn: '2d' })
}

// expressed in sec or a string describing a time span zeit/ms. eg 60 , "2 days" , "10h" , "7d"

module.exports = { createLoginToken } // if on {} this is called typed  or named exports or default