'use strict'
const InvestmentFactory = use('Factory')
import { investments } from '../../config/default_seed'
const Account = use('App/Models/Account')

InvestmentFactory.blueprint('App/Models/Investment', (faker) => {
  const accounts = await Account.ids()
  return {
    investment: faker.pickone(investments),
    value: faker.floating({ min: 0, max: 100 }),
    due_date: faker.date({string: true}),
    account_id: faker.pickone(accounts),
    created_at: faker.date({string: true}),
    updated_at: faker.date({string: true}),
  }
})

export default InvestmentFactory