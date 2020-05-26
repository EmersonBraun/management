'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StatusSchema extends Schema {
  up () {
    this.create('status', (table) => {
      table.increments()
      table.string('status', 200)
    })
  }

  down () {
    this.drop('status')
  }
}

module.exports = StatusSchema
