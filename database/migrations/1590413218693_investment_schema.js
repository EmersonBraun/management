'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InvestmentSchema extends Schema {
  up () {
    this.create('investments', (table) => {
      table.increments()
      table.string('investment', 100)
      table.float('value')
      table.date('due_date')
      table.timestamps()

      table.integer('account_id').unsigned().notNullable()
      table.foreign('account_id').references('id').inTable('accounts')
    })
  }

  down () {
    this.drop('investments')
  }
}

module.exports = InvestmentSchema
