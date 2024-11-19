const { log } = require('console');
const express = require('express');
const app = express();
const port = 3000;


app.get('/posts',(req,res)=>{
    res.send('Lista dei post');
})

app.listen(port,()=>{
    console.log('lista dei post');
    
})