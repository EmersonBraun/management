'use strict'

/*
|--------------------------------------------------------------------------
| OutOrderSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
import { OutOrderFactory } from '../factories'

class OutOrderSeeder {
  async run () {
    try {
      await OutOrderFactory.model('App/Models/OutOrder').create()
      console.log('Account sowing successfully')
    } catch (error) {
      console.error(error)
    }
  }
}

export default OutOrderSeeder
