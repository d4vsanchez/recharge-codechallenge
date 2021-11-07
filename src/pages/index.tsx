import type { NextPage } from 'next'

import products from '@/data/products.json'
import { ProductList } from '@/components/product/list'

const Home: NextPage = () => {
  return <ProductList products={products.products} />
}

export default Home
