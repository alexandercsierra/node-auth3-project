const {jwtSecret} = require('./secrets')
const jwt = require('jsonwebtoken')

module.exports = (user) => {
    const payload = {
        subject: user.id,
        user: user.user,
        role: user.dept
    }
    const options = {
        expiresIn: '1h'
    }
    console.log('payload', payload)
    return jwt.sign(payload, jwtSecret, options);
}