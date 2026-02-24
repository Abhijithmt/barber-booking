const express = require('express')
const app =express()
const port = 3000


app.get('/', (req,res)=>{
    res.send(`server is running in browser`)
} )

app.listen(port,()=>{
    console.log(`server is running in http://localhost:${port}`);
    
})