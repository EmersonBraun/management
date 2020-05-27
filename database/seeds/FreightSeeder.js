'use strict'

/*
|--------------------------------------------------------------------------
| FreightSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
import { FreightFactory } from '../factories'

class FreightSeeder {
  async run () {
    try {
      await FreightFactory.model('App/Models/Freight').create()
      console.log('Account sowing successfully')
    } catch (error) {
      console.error(error)
    }
  }
}

export default FreightSeeder
