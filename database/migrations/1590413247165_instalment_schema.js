'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InstalmentSchema extends Schema {
  up () {
    this.create('instalments', (table) => {
      table.increments()
      table.integer('qtd').unsigned()
      table.date('due_date')
      table.timestamps()
    })
  }

  down () {
    this.drop('instalments')
  }
}

module.exports = InstalmentSchema
