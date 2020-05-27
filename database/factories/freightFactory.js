'use strict'
const FreightFactory = use('Factory')

FreightFactory.blueprint('App/Models/Freight', (faker) => {
  return {
    freight: faker.floating({ min: 0, max: 100 })
  }
})

export default FreightFactory