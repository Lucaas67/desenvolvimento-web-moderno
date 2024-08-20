const Produto = require('../models/produto.js')

async function getProdutos(req, res){
    let produtos = await Produto.findAll();
    res.send(produtos);
}

function postCadastrarProdutos(req, res){
    let produto = {
        nome: req.body.nome,
        quantidade: req.body.quantidade
    };
    Produto.create(produto).then(()=>{
        res.send(true);
    }).catch((err)=>{
        console.log(err);
        res.send(false);
    });
}

module.exports = {
    getProdutos,
    postCadastrarProdutos
}