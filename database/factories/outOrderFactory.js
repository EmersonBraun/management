'use strict'
const OutOrderFactory = use('Factory')
const Order = use('App/Models/Order')

OutOrderFactory.blueprint('App/Models/OutOrder', (faker) => {
  const orders = await Order.ids()
  return {
    qtd: faker.integer({ min: 0, max: 100 }),
    order_id: faker.pickone(orders),
  }
})

export default OutOrderFactory