const express = require('express');
const rotasOperacoes = require('./operacoes');
const random = require('lodash');

const app = express();

// ativa o middleware nativo de parsing JSON do express.
app.use(express.json());

// o barra é a porta de entrada. Quando uma req começar com barra,
// o middleware Router vai entrar em ação justamente nesse router atribuído.
app.use('/', rotasOperacoes);

app.listen('3000', () => {
    console.log(">> Server iniciado na em http://localhost:3000");

    // solicitação da professora para expor valor aleatório.
    console.log("Número da sorte hoje: ", random.random(1, 30));
});