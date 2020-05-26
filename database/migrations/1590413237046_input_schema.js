'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InputSchema extends Schema {
  up () {
    this.create('inputs', (table) => {
      table.increments()
      table.string('input', 200)
      table.timestamps()
      table.integer('account_id').unsigned().notNullable()
      table.integer('area_id').unsigned().notNullable()
      
      table.foreign('account_id').references('id').inTable('accounts')
      table.foreign('area_id').references('id').inTable('areas')
    })
  }

  down () {
    this.drop('inputs')
  }
}

module.exports = InputSchema
