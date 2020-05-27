'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Area extends Model {
    static get primaryKey () {
        return 'id'
    }
}

export default Area
