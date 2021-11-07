import type { FC } from 'react'
import type { Product as ProductType } from '@/types/Product'

import styles from '@/styles/ProductList.module.css'
import { ProductContainer } from '@/components/product/container'

interface ProductListProps {
  products: Array<ProductType>
}

export const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductContainer key={product.id} product={product} />
      ))}
    </div>
  )
}
