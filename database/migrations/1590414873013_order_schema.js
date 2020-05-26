'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderSchema extends Schema {
  up () {
    this.create('orders', (table) => {
      table.increments()
      table.timestamps()
      table.integer('client_id').unsigned().notNullable()
      table.integer('freight_id').unsigned().nullable()
      table.integer('status_id').unsigned().notNullable()

      table.foreign('client_id').references('id').inTable('clients')
      table.foreign('freight_id').references('id').inTable('freights')
      table.foreign('status_id').references('id').inTable('statuss')
    })
  }

  down () {
    this.drop('orders')
  }
}

module.exports = OrderSchema
