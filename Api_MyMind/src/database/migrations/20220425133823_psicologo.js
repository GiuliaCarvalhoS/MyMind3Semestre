/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("psicologo", table =>{
    
    table.string("id",255).primary()
    table.bigint('cpf').unique();
    table.string('nome', 40).notNullable()
    table.string('dataNascimento', 11).notNullable()
    table.string('endereco', 250).notNullable()
    table.string('email', 250).notNullable()
    table.string('telefone', 14).notNullable()
    table.string('crp',15).notNullable()
    table.string('linkEpsi',15).notNullable()
    table.integer('anoDeFormação',4).notNullable()
    table.string('nomeUsuario', 40).unique().notNullable();
    table.string('senhaUsuario', 40).notNullable()

    
    
  
  })};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("psicologo")
};
