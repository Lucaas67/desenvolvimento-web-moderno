const Sequelize = require('sequelize');
const db = require('../db');

/*Criação de tabela, cada objeto é uma coluna da tabela*/

const Produto = db.define('produto', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Produto;