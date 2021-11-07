import type { FC } from 'react'
import type { Product } from '@/types/Product'

import styles from '@/styles/ProductDescription.module.css'
import { useComponentRegistrar } from '@/hooks/useCustomComponent'

interface ProductDescriptionProps {
  product: Product
}

export const ProductDescription: FC<ProductDescriptionProps> = ({ product }) => {
  const getComponentFor = useComponentRegistrar()

  if (getComponentFor('product-description')) {
    return getComponentFor('product-description')!({ product })
  }

  return <p className={styles.title}>{product.title}</p>
}
