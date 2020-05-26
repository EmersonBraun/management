'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OutputSchema extends Schema {
  up () {
    this.create('outputs', (table) => {
      table.increments()
      table.string('output', 200)
      table.timestamps()
      table.integer('installment_id').unsigned().notNullable()
      table.integer('area_id').unsigned().notNullable()
      
      table.foreign('installment_id').references('id').inTable('installments').onDelete('cascade')
      table.foreign('area_id').references('id').inTable('areas').onDelete('cascade')
    })
  }

  down () {
    this.drop('outputs')
  }
}

module.exports = OutputSchema
