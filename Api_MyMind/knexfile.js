// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

    development: {
      client: 'mysql',
      connection: {
      host : '127.0.0.1',
      port : 3307,
      user : 'root',
      password : 'root',
      database : 'Mymind'
    },
      migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    
  
  },
    
    
 


};
