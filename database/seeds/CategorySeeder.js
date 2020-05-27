'use strict'

/*
|--------------------------------------------------------------------------
| CategorySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
import { CategoryFactory } from '../factories'

class CategorySeeder {
  async run () {
    try {
      await CategoryFactory.model('App/Models/Category').create()
      console.log('Account sowing successfully')
    } catch (error) {
      console.error(error)
    }
  }
}

export default CategorySeeder
