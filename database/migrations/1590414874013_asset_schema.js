'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AssetSchema extends Schema {
  up () {
    this.create('assets', (table) => {
      table.increments()
      table.string('asset', 150)
      table.string('mime', 50)
      table.string('path', 150)
      table.timestamps()
      table.integer('order_id').unsigned().notNullable()
      table.foreign('order_id').references('id').inTable('orders')
    })
  }

  down () {
    this.drop('assets')
  }
}

module.exports = AssetSchema
