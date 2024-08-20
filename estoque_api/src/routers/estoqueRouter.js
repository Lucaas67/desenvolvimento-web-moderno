const express = require('express');
const router = express.Router();

const estoqueController = require('../controllers/estoqueController');

router.get('/api/produtos', estoqueController.getProdutos);
router.post('/api/produto/cadastrar', estoqueController.postCadastrarProdutos);

module.exports = router;