'use strict'

const MoveFactory = use('Factory')

const Input = use('App/Models/Input')
const Output = use('App/Models/Output')
const Status = use('App/Models/Status')

MoveFactory.blueprint('App/Models/Move', (faker) => {
  const inputs = await Input.ids()
  const outputs = await Output.ids()
  const status = await Status.ids()
  return {
    obs: faker.sentence({ words: 5 }),
    input_id: faker.pickone(inputs),
    output_id: faker.pickone(outputs),
    status_id: faker.pickone(status),
    created_at: faker.date({string: true}),
    updated_at: faker.date({string: true}),
  }
})

export default MoveFactory