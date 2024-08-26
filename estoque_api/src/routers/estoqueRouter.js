const express = require('express');
const router = express.Router();

const estoqueController = require('../controllers/estoqueController');

router.get('/api/produtos', estoqueController.getProdutos);
router.post('/api/produto/cadastrar', estoqueController.postCadastrarProdutos);
router.post('/api/produto/atualizar', estoqueController.postAtualizarProduto); 
router.post('/api/produto/excluir', estoqueController.postExcluirProduto); 

module.exports = router;
