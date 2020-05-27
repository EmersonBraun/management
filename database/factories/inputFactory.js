'use strict'
const InputFactory = use('Factory')
const Account = use('App/Models/Account')
const Area = use('App/Models/Area')
import { inputs } from '../../config/default_seed'

InputFactory.blueprint('App/Models/Input', (faker) => {
  const accounts = await Account.ids()
  const areas = await Area.ids()
  return {
    input: faker.pickone(inputs),
    account_id: faker.pickone(accounts),
    area_id: faker.pickone(areas),
  }
})

export default InputFactory