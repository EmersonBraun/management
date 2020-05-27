'use strict'
const PhoneFactory = use('Factory')
import { phoneTypes } from '../../config/default_seed'

PhoneFactory.blueprint('App/Models/Phone', (faker) => {
  return {
    type: faker.pickone(phoneTypes),
    number: faker.phone({ country: "fr" }),
    obs: faker.sentence({ words: 5 }),
    whatsapp: faker.bool(),
  }
})

export default PhoneFactory