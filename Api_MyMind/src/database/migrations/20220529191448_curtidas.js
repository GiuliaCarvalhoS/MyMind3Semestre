/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {return knex.schema.createTable("curtidas", table =>{
   
    table.string("curtidas", 255).references('id').on('publicacao').onDelete('CASCADE')
})};



/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("curtidas")
 };