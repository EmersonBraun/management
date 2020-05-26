'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FreightSchema extends Schema {
  up () {
    this.create('freights', (table) => {
      table.increments()
      table.float('freight')
    })
  }

  down () {
    this.drop('freights')
  }
}

module.exports = FreightSchema
