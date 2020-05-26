'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategorySchema extends Schema {
  up () {
    this.create('categories', (table) => {
      table.increments()
      table.string('category', 150)
    })
  }

  down () {
    this.drop('categories')
  }
}

module.exports = CategorySchema
