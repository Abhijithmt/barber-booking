const jwt =require('jsonwebtoken')


exports.protectjwt = (req,res,next)=>{


    const authheader =  req.headers.authorization

    if(!authheader ||!authheader.startsWith('Bearer')){
        return res.status(401).json({messege:'notoken,access denied'})
    }
    const token = authheader.split(' ')[1]

    //token varifying
    try {
        const decoded=jwt.verify(token,process.env.jwttoken)
        req.user=decoded
        next()
    } catch (error) {
        return res.status(401).json({message:"invalid or expired token"})
        
    }
} 