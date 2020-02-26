const router = require('express').Router();
const Users = require('./usersModel')

router.get('/', (req, res)=>{
    Users.getAll()
    .then(users=>res.status(200).json(users))
    .catch(err=>{
        console.log(err);
        res.status(500).json({message: 'server error'})
    })
})

router.delete('/:id', (req, res)=>{
    Users.remove(req.params.id)
        .then(user=>
            user ? res.status(200).json(user) : res.status(400).json({message:'user does not exist'}))
        .catch(err=>{
            console.log(err);
            res.status(500).json({message: 'server error'})
        })
})

module.exports = router