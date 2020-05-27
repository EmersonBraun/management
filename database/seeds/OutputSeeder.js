'use strict'

/*
|--------------------------------------------------------------------------
| OutputSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
import { OutputFactory } from '../factories'

class OutputSeeder {
  async run () {
    try {
      await OutputFactory.model('App/Models/Output').create()
      console.log('Account sowing successfully')
    } catch (error) {
      console.error(error)
    }
  }
}

export default OutputSeeder
