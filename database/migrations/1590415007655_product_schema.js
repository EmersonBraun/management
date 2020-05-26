'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('product', 150)
      table.integer('category_id').unsigned().notNullable()
      table.foreign('category_id').references('id').inTable('categories')
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
