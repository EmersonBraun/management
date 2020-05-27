'use strict'
const AreaFactory = use('Factory')
import { areas } from '../../config/default_seed'

AreaFactory.blueprint('App/Models/Area', (faker) => {
  return {
    area: faker.pickone(areas)
  }
})

export default AreaFactory