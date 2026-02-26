const mongoose = require('mongoose')

const user = new mongoose.Schema({
    name:{
        type:String,
        required:[true]
    },
    email:{
        type:String,
        required:[true],
        unique:[true],
        match:[/^\S+@\S+\.\S+$/],
        trim:[true],
        lowercase:[true]
    },
    password:{
        type:String,
        required:[true]
    },
    role:{
        type:String,
        required:[true],
        enum:['admin','user'],
        default:'user'

    }
})
module.exports=mongoose.model("user",user)