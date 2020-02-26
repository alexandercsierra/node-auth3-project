const router = require('express').Router();
const Users = require('./usersModel')

router.get('/', (req, res)=>{
    console.log('req from userRouter', req.body)
    // Users.getAll()
    // const dept = req.body.role;
    const dept = req.decodedToken.role;
    if (dept.toLowerCase() === "admin"){
        Users.getAll()
            .then(users=>res.status(200).json(users))
            .catch(err=>{
                console.log(err);
                res.status(500).json({message: 'server error'})
            })
    } else {
        Users.findBy({dept})
        .then(users=>res.status(200).json(users))
        .catch(err=>{
            console.log(err);
            res.status(500).json({message: 'server error'})
        })
    }
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