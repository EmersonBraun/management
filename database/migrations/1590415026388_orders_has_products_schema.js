'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrdersHasProductsSchema extends Schema {
  up () {
    this.create('orders_has_products', (table) => {
      table.float('sell_value')
      table.integer('order_id').unsigned().notNullable()
      table.integer('product_id').unsigned().notNullable()

      table.foreign('order_id').references('id').inTable('orders')
      table.foreign('product_id').references('id').inTable('products')
    })
  }

  down () {
    this.drop('orders_has_products')
  }
}

module.exports = OrdersHasProductsSchema
