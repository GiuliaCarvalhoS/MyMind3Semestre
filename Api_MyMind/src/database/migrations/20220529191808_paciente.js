/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("paciente", table =>{
    table.integer('Id_Paciente', 4).primary()
    table.string('Nome', 50)
    table.string('Sobrenome', 100)
    table.string('DataNascimento', 11)
    table.string('email', 95)
    table.string('genero', 10)
    table.string('cpf', 15).unique()
    table.string('nomeUsuario', 40).unique().notNullable()
    table.string('senhaUsuario', 250).notNullable()
    table.string('Resposta', 20)
    table.string('Tempo_De_Acompanhamento', 45)
})};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("paciente")
};
