'use strict'
const AssetFactory = use('Factory')
import { mimes } from '../../config/default_seed'
const Order = use('App/Models/Order')

AssetFactory.blueprint('App/Models/Asset', (faker) => {
    const orders = await Order.ids()
  return {
    asset: faker.username(),
    mime: faker.pickone(mimes),
    path: 'https://picsum.photos/200/300',
    created_at: faker.date({string: true}),
    updated_at: faker.date({string: true}),
    order_id: faker.pickone(orders),
  }
})

export default AssetFactory