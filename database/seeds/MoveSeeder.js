'use strict'

/*
|--------------------------------------------------------------------------
| MoveSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
import { MoveFactory } from '../factories'

class MoveSeeder {
  async run () {
    try {
      await MoveFactory.model('App/Models/Move').create()
      console.log('Account sowing successfully')
    } catch (error) {
      console.error(error)
    }
  }
}

export default MoveSeeder
