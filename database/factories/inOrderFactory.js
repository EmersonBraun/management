'use strict'
const InOrderFactory = use('Factory')
const Product = use('App/Models/Product')
const Provider = use('App/Models/Provider')

InOrderFactory.blueprint('App/Models/InOrder', (faker) => {
  const products = await Product.ids()
  const providers = await Provider.ids()
  return {
    unitary_value: faker.floating({ min: 0, max: 100 }),
    qtd: faker.integer({ min: 0, max: 100 }),
    product_id: faker.pickone(products),
    provider_id: faker.pickone(providers),
  }
})

export default InOrderFactory