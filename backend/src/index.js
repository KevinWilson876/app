const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//rota / recurso

/** metodos HTTP:
*
* GET: busca/listar uma imformacao do back-end
* POST: Criar uma imformacao no back-end
* PUT: Alterar uma imformacao no back-end
* DELETE: deletar uma imformacao no back-end
*/

/**
 * Tipos de parametros:
 * 
 * Query Params: Parametros nomeados enviados na rota  após "?" (Filtros, paginação )
 * Route Params: Parametros utilizados para identificar recursos 
 * Request Body: Corpo da requisição, utilizando para criar ou alterar recursos 
 */

 /**
 *  SQL: MYSQL, SQLITE, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchoDB, etc.
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users'),select('*').where()
   */

app.listen(3333);