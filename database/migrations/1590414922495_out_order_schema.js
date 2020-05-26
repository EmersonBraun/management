'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OutOrderSchema extends Schema {
  up () {
    this.create('out_orders', (table) => {
      table.increments()
      table.integer('qtd').unsigned()
      table.integer('order_id').unsigned().notNullable()
      table.foreign('order_id').references('id').inTable('orders')
    })
  }

  down () {
    this.drop('out_orders')
  }
}

module.exports = OutOrderSchema
