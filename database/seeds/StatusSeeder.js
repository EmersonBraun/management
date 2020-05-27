'use strict'

/*
|--------------------------------------------------------------------------
| StatusSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
import { StatusFactory } from '../factories'

class StatusSeeder {
  async run () {
    try {
      await StatusFactory.model('App/Models/Status').create()
      console.log('Account sowing successfully')
    } catch (error) {
      console.error(error)
    }
  }
}

export default StatusSeeder
