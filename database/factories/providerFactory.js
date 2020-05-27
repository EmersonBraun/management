'use strict'
const ProviderFactory = use('Factory')
import { providers } from '../../config/default_seed'

ProviderFactory.blueprint('App/Models/Provider', (faker) => {
  return {
    provider: faker.pickone(providers)
  }
})

export default ProviderFactory