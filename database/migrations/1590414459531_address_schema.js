'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddressSchema extends Schema {
  up () {
    this.create('addresses', (table) => {
      table.increments()
      table.string('cep', 20)
      table.string('city', 150)
      table.string('street', 150)
      table.string('number', 150)
      table.string('complement', 150)
      table.text('obs')
    })
  }

  down () {
    this.drop('addresses')
  }
}

module.exports = AddressSchema
