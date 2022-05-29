/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("psicologo", table =>{
    
    table.string("id",255).primary()
    table.string('cpf', 15).unique();
    table.string('nome', 40).notNullable()
    table.string('dataNascimento', 11).notNullable()
    table.string('cidade', 40).notNullable()
    table.string('cep', 9).notNullable()
    table.string('rua', 80).notNullable()
    table.string('bairro', 40).notNullable()
    table.integer('numero', 5).notNullable()
    table.string('complemento', 60)
    table.string('email', 250).notNullable()
    table.string('telefone', 14).notNullable()
    table.string('crp',15).notNullable()
    table.string('linkEpsi',15) .notNullable()
    table.integer('anoDeFormacao',4).notNullable()
    table.string('instituicaoEnsino', 50).notNullable()
    table.string('nomeUsuario', 40).unique().notNullable();
    table.string('senhaUsuario', 250).notNullable()

    
  
  })};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("psicologo")
};
