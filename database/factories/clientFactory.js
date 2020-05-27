'use strict'
const ClientFactory = use('Factory')
const Address = use('App/Models/Address')
const Phone = use('App/Models/Phone')

ClientFactory.blueprint('App/Models/Client', (faker) => {
  const addresses = await Address.ids()
  const phones = await Phone.ids()
  return {
    name: faker.username(),
    birt_date: faker.date({string: true}),
    address_id: faker.pickone(addresses),
    phone_id: faker.pickone(phones),
  }
})

export default ClientFactory