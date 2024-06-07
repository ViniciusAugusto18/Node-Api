"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    await knex.schema.createTable('transactions', (table) => {
        table.uuid('id').primary();
        table.text('title').notNullable();
        table.decimal('amount', 18, 2).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable(); // como e um timestamp para ser verificado por tds os bancos tem q por o knex.fn.now
    });
}
exports.up = up;
async function down(knex) {
    await knex.schema.dropTable('transactions');
}
exports.down = down;
// nao se pode fazer alteracoes se caso errou e mandou para outra pessoa do time nesse caso tem que fazer outra migration
// apenas se pode fazer quando vc n mandou para producao fazendo assim um npm run dev e npm run knex -- migrate:rollback
