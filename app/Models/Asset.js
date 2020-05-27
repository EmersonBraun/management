'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Asset extends Model {
    static get primaryKey () {
        return 'id'
    }
}

export default Asset
