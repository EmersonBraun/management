'use strict'
const AddressFactory = use('Factory')

AddressFactory.blueprint('App/Models/Address', (faker) => {
  return {
    cep: faker.zip(),
    city: faker.city(),
    street: faker.street(),
    number: faker.integer({ min: 1, max: 500 }),
    complement: faker.character({ alpha: true }),
    obs: faker.sentence({ words: 5 }),
  }
})

export default AddressFactory