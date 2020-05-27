'use strict'
const TokenFactory = use('Factory')
const User = use('App/Models/User')

TokenFactory.blueprint('App/Models/Token', (faker) => {
  const users = await User.ids()
  return {
    username: faker.username(),
    user_id: faker.pickone(users),
    token: faker.string(),
    type: faker.pickone([1,2,3]),
    is_revoked: faker.boolean(),
  }
})

export default TokenFactory