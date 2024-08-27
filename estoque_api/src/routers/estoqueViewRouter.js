const express = require('express');
const router = express.Router();

const estoqueViewController = require('../controllers/estoqueViewController');

/** Associa uma rota a uma função da controller */
router.get('/produtos', estoqueViewController.getViewProdutos);
router.get('/produto/cadastrar', estoqueViewController.getViewCadastrarProduto);
router.post('/produto/cadastrar', estoqueViewController.postCadastrarProduto);

module.exports = router;