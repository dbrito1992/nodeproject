const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('Ola Mundo!!');
})

app.get('/sobreNos', (req, res)=>{
    res.send("Página de sobre nós!!!")
})

app.listen(3000, ()=>{
    console.log("Servidor Ligado!");
})