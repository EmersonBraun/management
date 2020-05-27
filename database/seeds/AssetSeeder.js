'use strict'

/*
|--------------------------------------------------------------------------
| AssetSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
import { AssetFactory } from '../factories'

class AssetSeeder {
  async run () {
    try {
      await AssetFactory.model('App/Models/Asset').create()
      console.log('Account sowing successfully')
    } catch (error) {
      console.error(error)
    }
  }
}

export default AssetSeeder
