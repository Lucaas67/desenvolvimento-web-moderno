const Produto = require('../models/produto.js');

async function getProdutos(req, res) {
    try {
        let produtos = await Produto.findAll();
        res.send(produtos);
    } catch (err) {
        console.log(err);
        res.status(500).send("Erro ao buscar produtos");
    }
}

function postCadastrarProdutos(req, res) {
    let produto = {
        nome: req.body.nome,
        quantidade: req.body.quantidade
    };
    Produto.create(produto).then(() => {
        res.send(true);
    }).catch((err) => {
        console.log(err);
        res.send(false);
    });
}

async function postAtualizarProduto(req, res) {
    try {
        const { id, nome, quantidade } = req.body;

        let produto = await Produto.findByPk(id);

        if (produto) {
            produto.nome = nome;
            produto.quantidade = quantidade;

            await produto.save();
            res.send(true);
        } else {
            res.status(404).send(false);
        }
    } catch (err) {
        console.log(err);
        res.status(500).send(false);
    }
}

async function postExcluirProduto(req, res) {
    try {
        const { id } = req.body;

        let produto = await Produto.findByPk(id);

        if (produto) {
            await produto.destroy();
            res.send(true);
        } else {
            res.status(404).send(false);
        }
    } catch (err) {
        console.log(err);
        res.status(500).send(false);
    }
}

module.exports = {
    getProdutos,
    postCadastrarProdutos,
    postAtualizarProduto,
    postExcluirProduto
};
