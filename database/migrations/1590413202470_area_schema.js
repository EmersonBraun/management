'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AreaSchema extends Schema {
  up () {
    this.create('areas', (table) => {
      table.increments()
      table.string('area', 150)
    })
  }

  down () {
    this.drop('areas')
  }
}

module.exports = AreaSchema
