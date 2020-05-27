'use strict'

/*
|--------------------------------------------------------------------------
| PhoneSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
import { PhoneFactory } from '../factories'

class PhoneSeeder {
  async run () {
    try {
      await PhoneFactory.model('App/Models/Phone').create()
      console.log('Account sowing successfully')
    } catch (error) {
      console.error(error)
    }
  }
}

export default PhoneSeeder
