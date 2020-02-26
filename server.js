const express = require('express');
const helmet = require('helmet');
const server = express();
const authRouter = require('./auth/authRouter')
const userRouter = require('./users/userRouter')
const restricted = require('./auth/restricted-middleware')
const checkRole = require('./config/checkRole')

server.use(helmet());
server.use(express.json());
server.use('/auth', authRouter)
server.use('/users', restricted, checkRole('hr'), userRouter)

server.get('/', (req, res)=>{
    res.status(200).json({message:'welcome to the server'})
})

module.exports = server