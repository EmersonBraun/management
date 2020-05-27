'use strict'
const OrderStatusFactory = use('Factory')
import { orderStatus } from '../../config/default_seed'

OrderStatusFactory.blueprint('App/Models/OrderStatus', (faker) => {
  return {
    order_status: faker.pickone(orderStatus)
  }
})

export default OrderStatusFactory