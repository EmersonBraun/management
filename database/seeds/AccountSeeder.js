'use strict'

/*
|--------------------------------------------------------------------------
| AccountSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
import { AccountFactory } from '../factories'

class AccountSeeder {
  async run () {
    try {
      await AccountFactory.model('App/Models/Account').create()
      console.log('Account sowing successfully')
    } catch (error) {
      console.error(error)
    }
  }
}

export default AccountSeeder
