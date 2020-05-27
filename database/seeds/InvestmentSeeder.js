'use strict'

/*
|--------------------------------------------------------------------------
| InvestmentSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
import { InvestmentFactory } from '../factories'

class InvestmentSeeder {
  async run () {
    try {
      await InvestmentFactory.model('App/Models/Investment').create()
      console.log('Account sowing successfully')
    } catch (error) {
      console.error(error)
    }
  }
}

export default InvestmentSeeder
