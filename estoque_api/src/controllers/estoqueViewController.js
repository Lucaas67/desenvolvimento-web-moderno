const Produto = require('../models/produto');

async function getViewProdutos(req, res) {
    let produtos = await Produto.findAll();
    res.render('produtos.html', {produtos});
}

function getViewCadastrarProduto(req, res) {
    res.render('cadastrar.html');
}

function postCadastrarProduto(req, res) {
    let produto = {
        nome: req.body.nome,
        quantidade: req.body.quantidade
    };
    Produto.create(produto)
    .then(() => {
        res.redirect('/produto/cadastrar?status=true');
    }).catch((err) => {
        console.log(err);
        res.redirect('/produto/cadastrar?status=false');
    });
}

module.exports = {
    getViewProdutos,
    getViewCadastrarProduto,
    postCadastrarProduto
}