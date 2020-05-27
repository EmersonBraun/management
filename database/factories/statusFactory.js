'use strict'
const StatusFactory = use('Factory')
import { status } from '../../config/default_seed'

StatusFactory.blueprint('App/Models/Status', (faker) => {
  return {
    status: faker.pickone(status),
  }
})

export default StatusFactory