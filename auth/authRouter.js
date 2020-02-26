const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('../users/usersModel')
// const jwt = require('jsonwebtoken');
// const {jwtSecret} = require('../config/secrets');
const generateToken = require('../config/generateToken');

router.get('/', (req, res)=>{
    res.status(200).json({message: 'welcome to the auth router'})
})

router.post('/register', (req, res)=>{
    const user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    Users.add(user)
        .then(user=>res.status(200).json(user))
        .catch(err=>{
            console.log(err);
            res.status(500).json({message: 'server error'})
        })

})

router.post('/login', (req, res)=>{
    const {user, password} = req.body;
    console.log('req.body from login route', req.body);
    Users.findBy({user})
        .first()
        .then(user=>{
            if (user && bcrypt.compareSync(password, user.password)){
                const token = generateToken(user);
                
                res.status(200).json({message: `Welcome ${user.user}`, token})
            } else {
                res.status(401).json({message: 'invalid credentials'})
            }
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({message: 'server error'})
        })
})

module.exports = router;