'use strict'
const AccountFactory = use('Factory')

import { banks, accountTypes } from '../../config/default_seed'
AccountFactory.blueprint('App/Models/Account', (faker) => {
  return {
    bank: faker.pickone(banks),
    account: faker.floating({ min: 0, max: 100 }),
    agency: faker.floating({ min: 0, max: 100 }),
    type: faker.pickone(accountTypes),
    obs: faker.sentence({ words: 5 }),
  }
})

export default AccountFactory