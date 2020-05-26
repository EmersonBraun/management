'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MoveSchema extends Schema {
  up () {
    this.create('moves', (table) => {
      table.increments()
      table.text('obs')
      table.timestamps()
      table.integer('input_id').unsigned().notNullable()
      table.integer('output_id').unsigned().notNullable()
      table.integer('status_id').unsigned().notNullable()
      
      table.foreign('input_id').references('id').inTable('inputs').onDelete('cascade')
      table.foreign('output_id').references('id').inTable('outputs').onDelete('cascade')
      table.foreign('status_id').references('id').inTable('status').onDelete('cascade')
    })
  }

  down () {
    this.drop('moves')
  }
}

module.exports = MoveSchema
