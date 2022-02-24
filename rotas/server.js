const express = require('express');
const app = express();
const routes = require('./routes');

// Recebe um corpo de dados na requesição
app.use(express.urlencoded({extended: true}));
app.use(routes);

app.listen(3000, ()=>{
    console.log("Servidor Ligado!");
})