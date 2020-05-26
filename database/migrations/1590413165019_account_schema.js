'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AccountSchema extends Schema {
  up () {
    this.create('accounts', (table) => {
      table.increments()
      table.string('bank', 100)
      table.string('account', 50)
      table.string('agency', 50)
      table.string('type', 50).defaultTo('cc')
      table.string('obs', 255).nullable()
    })
  }

  down () {
    this.drop('accounts')
  }
}

module.exports = AccountSchema
