import type { FC } from 'react'
import type { Product } from '@/types/Product'

import styles from '@/styles/ProductImage.module.css'
import { useComponentRegistrar } from '@/hooks/useCustomComponent'

interface ProductImageProps {
  product: Product
}

export const ProductImage: FC<ProductImageProps> = ({ product }) => {
  const getComponentFor = useComponentRegistrar()

  if (getComponentFor('product-image')) {
    return getComponentFor('product-image')!({ product })
  }

  return <img src={product.featured_image} className={styles.image} />
}
