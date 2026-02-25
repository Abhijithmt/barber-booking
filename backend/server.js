const express =require('express')
const mongooose=require('mongoose')
const app=express()
const port=5000
require('dotenv').config()


app.get('/',(req,res)=>{
    res.send('barber booking website')
});

app.listen(port,()=>{
    console.log(`server is running in http://localhost:${port}`);
    
})