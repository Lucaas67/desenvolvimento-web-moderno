/* Importa o pacote express */ 
const express = require('express');

/* Importa o pacote mustache-express para renderizar HTML */ 
const mustacheExpress = require('mustache-express');

const db = require('./src/db');
const estoqueRouter = require('./src/routers/estoqueRouter');
const estoqueViewRouter = require('./src/routers/estoqueViewRouter');

/** Cria um aplicativo a partir do construtor do express */
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/src/views');

app.use(express.urlencoded({extended: true}));

app.use('/', estoqueRouter);
app.use('/', estoqueViewRouter);

/** Sincroniza a conexão com o banco de dados. */
db.sync(()=>{
    console.log('DB conectado.');
});

/** Declara uma porta e inicializa a execução do aplicativo na porta declarada */
const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});