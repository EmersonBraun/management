'use strict'
const UserFactory = use('Factory')

UserFactory.blueprint('App/Models/User', (faker) => {
  return {
    username: faker.username(),
    password: await Hash.make('secret')
  }
})

export default UserFactory