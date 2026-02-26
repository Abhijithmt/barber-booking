const User=require('../model/user')
const bcrypt=require('bcrypt')

exports.register =async (req,res)=>{
    try{
        const{name,email,password}=req.body

       

        if(!name || !email || !password ){
            return res.status(400).json({message:"All fields is must"})
        }

        const userexist =await User.findOne({email});
        if(userexist){
           return res.status(409).json({message:"user already exist"})

        }
         const hashpassword=await bcrypt.hash(password,10)

        
        const newuser = new User({
            name,
            email,
            password:hashpassword,
            role:'user'
        })
        await newuser.save()
       return res.status(201).json({message:'user created successfully'})
        
    }catch(error){
        res.status(500).json({message:error.message})

    }
}
