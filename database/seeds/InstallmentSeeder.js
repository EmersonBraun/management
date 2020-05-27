'use strict'

/*
|--------------------------------------------------------------------------
| InstallmentSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
import { InstallmentFactory } from '../factories'

class InstallmentSeeder {
  async run () {
    try {
      await InstallmentFactory.model('App/Models/Installment').create()
      console.log('Account sowing successfully')
    } catch (error) {
      console.error(error)
    }
  }
}

export default InstallmentSeeder
