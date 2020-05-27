'use strict'
const ProductFactory = use('Factory')
import { products } from '../../config/default_seed'
const Category = use('App/Models/Category')

ProductFactory.blueprint('App/Models/Product', (faker) => {
  const categories = await Category.ids()
  return {
    product: faker.pickone(products),
    category_id: faker.pickone(categories),
  }
})

export default ProductFactory