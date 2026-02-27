const express =require('express')
const mongooose=require('mongoose')
const app=express()
const cors=require('cors')
const port=5000
require('dotenv').config()


//middleware for req.body,or it will undefined
app.use(cors())
app.use(express.json())




// importing router
const userrouter=require('./router/user')



//setting the path

app.use('/auth',userrouter)







app.get('/',(req,res)=>{
    res.send('barber booking website')
});

app.listen(port,()=>{
    console.log(`server is running in http://localhost:${port}`);
    
})

mongooose.connect("mongodb://127.0.0.1:27017/barber-booking")
.then(()=>console.log("mongodb conneced successfully"))
.catch((error)=>console.log("mongod connection error",error));