/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('paciente').del()
  await knex('paciente').insert([
    {nome: "andré",
     sobrenome: "Delphin"
    }
  ]);
};
