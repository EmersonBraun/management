'use strict'

/*
|--------------------------------------------------------------------------
| OrderStatusSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
import { OrderSatusFactory } from '../factories'

class OrderStatusSeeder {
  async run () {
    try {
      await OrderSatusFactory.model('App/Models/OrderSatus').create()
      console.log('Account sowing successfully')
    } catch (error) {
      console.error(error)
    }
  }
}

export default OrderStatusSeeder
