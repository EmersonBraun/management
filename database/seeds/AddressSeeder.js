'use strict'

/*
|--------------------------------------------------------------------------
| AddressSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
import { AddressFactory } from '../factories'

class AddressSeeder {
  async run () {
    try {
      await AddressFactory.model('App/Models/Address').create()
      console.log('Account sowing successfully')
    } catch (error) {
      console.error(error)
    }
  }
}

export default AddressSeeder
