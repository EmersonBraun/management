'use strict'

/*
|--------------------------------------------------------------------------
| OrderSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
import { OrderFactory } from '../factories'

class OrderSeeder {
  async run () {
    try {
      await OrderFactory.model('App/Models/Order').create()
      console.log('Account sowing successfully')
    } catch (error) {
      console.error(error)
    }
  }
}

export default OrderSeeder
