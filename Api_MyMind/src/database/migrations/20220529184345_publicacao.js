/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
        return knex.schema.createTable("publicacao", table =>{
          table.string("id",255).primary()
          table.string("texto", 255)
          table.string("titulo", 80)
          table.string('imagem', 255)
          table.string("id_psicologo", 255).references('id').on('psicologo').onDelete('CASCADE')
        
})};
  

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("publicacao")
};
