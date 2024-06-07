import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('transactions', (table) => {
    table.uuid('id').primary()
    table.text('title').notNullable()
    table.decimal('amount', 18, 2).notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable() // como e um timestamp para ser verificado por tds os bancos tem q por o knex.fn.now
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('transactions')
}
// nao se pode fazer alteracoes se caso errou e mandou para outra pessoa do time nesse caso tem que fazer outra migration
// apenas se pode fazer quando vc n mandou para producao fazendo assim um npm run dev e npm run knex -- migrate:rollback
