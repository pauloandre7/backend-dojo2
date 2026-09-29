const express = require('express');

// um roteador pra guardar as rotas que eu definir
// é um middleware completo do express
const router = express.Router();

// -------- Rotas Get

router.get('/soma', (req, res) => {
    res.status(200).send(">> Você está na rota de soma!");
});

router.get('/subtracao', (req, res) => {
    res.status(200).send(">> Você está na rota de subtração!");
});

router.get('/multiplicacao', (req, res) => {
    res.status(200).send(">> Você está na rota de multiplicação!");
});

router.get('/divisao', (req, res) => {
    res.status(200).send(">> Você está na rota de divisão!");
});

// -------- Rotas post

router.post('/soma', (req, res) =>{

    // Uso aquela desestruturação esperando receber um json com 2 variáveis só.
    const { a, b } = req.body;

    res.json({ resultado: a+b})
    console.log("resultado de ", a, "+", b, " = ", a+b);
});

router.post('/subtracao', (req, res) => {
    const {a, b} = req.body;

    res.json({resultado: a-b});
    console.log("resultado de ", a, "-", b, " = ", a-b);
});

router.post('/multiplicacao', (req, res) =>{
    const { a, b } = req.body;

    res.json({resultado: a*b});
    console.log("resultado de ", a, "*", b, " = ", a*b)
    
});

router.post('/divisao', (req, res) => {
    const {a,b} = req.body;

    
    if(b != 0){
        res.json({resultado: a/b});
        console.log("resultado de ", a, "/", b, " = ", a/b)
    } else {
        const msg = ">> Não é possível realizar divisão por 0";
        res.status(400).send(msg);
        console.log(msg);
    }
    
});

module.exports = router;