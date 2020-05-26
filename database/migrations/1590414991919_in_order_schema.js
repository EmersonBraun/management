'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InOrderSchema extends Schema {
  up () {
    this.create('in_orders', (table) => {
      table.increments()
      table.float('unitary_value')
      table.integer('qtd').unsigned()
      table.integer('product_id').unsigned().notNullable()
      table.integer('order_id').unsigned().notNullable()

      table.foreign('product_id').references('id').inTable('products')
      table.foreign('order_id').references('id').inTable('orders')
    })
  }

  down () {
    this.drop('in_orders')
  }
}

module.exports = InOrderSchema
