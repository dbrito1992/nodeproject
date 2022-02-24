const express = require('express');
const app = express();

// Recebe um corpo de dados na requesição
app.use(
    express.urlencoded({
        extended: true
    })
);
// Envia Dados
app.get('/testPost', (req, res)=>{
    res.send(`
    <form action="/recebePost" method="POST">
        <input type="text" name="nome" placeholder="Digite seu nome"/>
        <button>Enviar</button>
    </form>
    `)
})
// Recebe Dados
app.post('/recebePost', (req, res)=>{
    res.send(req.body.nome);
})
// recebe Dados
// Params = :param e valor
// Query = ?query e valor
app.get('/recebePost', (req, res)=>{
    console.log(req.params)
    res.send(req.query.p);
})

app.get('/', (req, res)=>{
    res.send('Ola Mundo!!');
})

app.get('/sobreNos', (req, res)=>{
    res.send("Página de sobre nós!!!")
})

app.listen(3000, ()=>{
    console.log("Servidor Ligado!");
})