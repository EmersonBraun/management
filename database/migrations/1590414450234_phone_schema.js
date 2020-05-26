'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PhoneSchema extends Schema {
  up () {
    this.create('phones', (table) => {
      table.increments()
      table.string('type', 150)
      table.string('number', 150)
      table.text('whatsapp')
      table.text('obs')
    })
  }

  down () {
    this.drop('phones')
  }
}

module.exports = PhoneSchema
