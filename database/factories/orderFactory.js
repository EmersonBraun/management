'use strict'
const OrderFactory = use('Factory')

const Client = use('App/Models/Client')
const Freight = use('App/Models/Freight')
const Status = use('App/Models/Status')

OrderFactory.blueprint('App/Models/Order', (faker) => {
  const clients = await Client.ids()
  const freights = await Freight.ids()
  const status = await Status.ids()
  return {
    client_id: faker.pickone(clients),
    freight_id: faker.pickone(freights),
    status_id: faker.pickone(status),
    created_at: faker.date({string: true}),
    updated_at: faker.date({string: true}),
  }
})

export default OrderFactory