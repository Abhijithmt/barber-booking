const express = require('express')
const { default: mongoose } = require('mongoose')
const app =express()
const port = 3000
require('dotenv').config()

app.get('/', (req,res)=>{
    res.send('barber-booking website')
} )

app.listen(port,()=>{
    console.log(`server is running in http://localhost:${port}`);
    
})
mongoose.connect("mongodb://127.0.0.1:27017/barber-booking")
.then(()=>console.log('mongodb connected succesfully'))
.catch(()=>console.log('mongodb connnecction error'))