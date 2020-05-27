'use strict'

/*
|--------------------------------------------------------------------------
| InOrderSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
import { InOrderFactory } from '../factories'

class InOrderSeeder {
  async run () {
    try {
      await InOrderFactory.model('App/Models/InOrder').create()
      console.log('Account sowing successfully')
    } catch (error) {
      console.error(error)
    }
  }
}

export default InOrderSeeder
