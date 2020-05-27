'use strict'
const OutputFactory = use('Factory')
import { outputs } from '../../config/default_seed'
const Area = use('App/Models/Area')
const Installment = use('App/Models/Area')

OutputFactory.blueprint('App/Models/Output', (faker) => {
  const areas = await Area.ids()
  const installment = await Installment.ids()
  return {
    output: faker.pickone(outputs),
    area_id: faker.pickone(areas),
    installment_id: faker.pickone(installment),
  }
})

export default OutputFactory