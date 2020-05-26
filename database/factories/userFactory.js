const Factory = use('Factory')

Factory.blueprint('App/Models/User', (faker) => {
  return {
    username: faker.username(),
    password: faker.password()
  }
})