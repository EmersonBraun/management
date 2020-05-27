'use strict'
const CategoryFactory = use('Factory')
import { categories } from '../../config/default_seed'

CategoryFactory.blueprint('App/Models/Category', (faker) => {
  return {
    category: faker.pickone(categories)
  }
})

export default CategoryFactory