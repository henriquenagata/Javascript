var db = [];

const express = require('express');
const request = require('request');
const chalk   = require('chalk');

const app = express();

// app.get('/', (request, response) => {
//     response.status(200).send(body);
// });

app.post('/usuario', (request, response) => {
    // nome, sobrenome, cep, numero, complemento, telefone, senha
    console.log(JSON.stringify(request.body));
    
    let usuario = {
        nome: request.body.nome,
        sobrenome: request.body.sobrenome,
        cep: request.body.cep,
        numero: request.body.numero,
        complemento: request.body.complemento,
        telefone: request.body.telefone,
        senha: request.body.senha
    };

    if (usuario.nome === ''){
        response.status(400).send('Nome em branco');
    }

    db.push(usuario);
    response.status(201).send('Usuário incluido com sucesso');
})

app.listen(3000, ()=>{
    console.log(chalk.green('Servidor rodando na porta 3000'));
})
