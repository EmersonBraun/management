'use strict'

/*
|--------------------------------------------------------------------------
| ProviderSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
import { ProviderFactory } from '../factories'

class ProviderSeeder {
  async run () {
    try {
      await ProviderFactory.model('App/Models/Provider').create()
      console.log('Account sowing successfully')
    } catch (error) {
      console.error(error)
    }
  }
}

export default ProviderSeeder
