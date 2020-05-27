'use strict'

/*
|--------------------------------------------------------------------------
| TokenSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
import { TokenFactory } from '../factories'

class TokenSeeder {
  async run () {
    try {
      await TokenFactory.model('App/Models/Token').create()
      console.log('Account sowing successfully')
    } catch (error) {
      console.error(error)
    }
  }
}

export default TokenSeeder
