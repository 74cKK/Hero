/* IMPORTANDO BIBLIOTECA DADOS DA BIBLIOTECA 'EXPRESS'*/

const express = require ('express'); 
const cors = require ('cors');
const routes = require('./routes');

const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);
 
/* 
*Métodos HTTP:
*
* GET: Buscar/listar uma informação do banck-end
* POST: Criar uma informação no back-end
* PUT: Alterar uma informação no back-end
* DELETE: Deletar uma informação no back-end 
*/

/**
 * Tipos de parâmetros:
 * Query Params: Parâmetros nomeados enviados na rota após o "?" (filtros, páginação de dados, por exemplo.)
 * Route Params: Parâmetros utilizados para idetificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos

/**
 * BANCO DE DADOS
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, entre outros
 */


/* OUVIR PORTA*/
app.listen(3333);





