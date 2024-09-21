/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    return knex.schema.createTable('tb_pessoa', (table) => {
        table.increments('id_pessoa').primary();      // ID autoincremental
        table.string('nome', 255).notNullable();      // Nome (obrigatório)
        table.string('email', 255).notNullable();     // Email (obrigatório)
        table.string('telefone', 20).notNullable();   // Telefone (obrigatório)
        table.timestamps(true, true);                 // Colunas created_at e updated_at
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
    return knex.schema.dropTable('tb_pessoa');
}
