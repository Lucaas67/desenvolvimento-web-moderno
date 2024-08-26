const express = require('express');
const db = require('./src/db');
const estoqueRouter = require('./src/routers/estoqueRouter');
const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

app.use('/', estoqueRouter);

db.sync()
    .then(() => {
        console.log('Banco de dados sincronizado');
    })
    .catch((err) => {
        console.error('Erro ao sincronizar o banco de dados:', err);
    });

app.listen(PORT, () => {
    console.log(`Aplicativo web em execução na porta ${PORT}`);
});
