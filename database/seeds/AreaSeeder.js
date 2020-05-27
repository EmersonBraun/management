'use strict'

/*
|--------------------------------------------------------------------------
| AreaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
import { AreaFactory } from '../factories'

class AreaSeeder {
  async run () {
    try {
      await AreaFactory.model('App/Models/Area').create()
      console.log('Account sowing successfully')
    } catch (error) {
      console.error(error)
    }
  }
}

export default AreaSeeder
