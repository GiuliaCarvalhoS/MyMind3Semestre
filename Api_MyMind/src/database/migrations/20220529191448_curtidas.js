/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {return knex.schema.createTable("curtidas", table =>{
    table.integer("curtidas",4).unsigned().index().references("id").inTable("curtidas")
});

}/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("curtidas")
 };