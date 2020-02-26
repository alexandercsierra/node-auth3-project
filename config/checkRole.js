

function checkRole(role){
    return (req, res, next)=>{
        console.log('decoded token', req.decodedToken)
        if(req.decodedToken && req.decodedToken.role && req.decodedToken.role.toLowerCase() === role){
            // if(req.decodedToken && req.decodedToken.role){
            req.body.role = role;
            next();
        } else {
            res.status(403).json({message: 'role incorrect for access'})
        }
    }
}


module.exports = checkRole