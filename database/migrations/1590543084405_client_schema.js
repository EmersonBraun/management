'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientSchema extends Schema {
  up () {
    this.create('clients', (table) => {
      table.increments()
      table.string('name',200)
      table.date('birth_date')
      table.integer('address_id').unsigned().notNullable()
      table.integer('phone_id').unsigned().notNullable()

      table.foreign('address_id').references('id').inTable('address')
      table.foreign('phone_id').references('id').inTable('phones')
    })
  }

  down () {
    this.drop('clients')
  }
}

module.exports = ClientSchema
