'use strict'
const InstallmentFactory = use('Factory')

InstallmentFactory.blueprint('App/Models/Installment', (faker) => {
  return {
    qtd: faker.integer({ min: 0, max: 100 }),
    due_date: faker.date({string: true}),
  }
})

export default InstallmentFactory