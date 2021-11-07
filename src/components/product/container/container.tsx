import type { FC } from 'react'
import type { Product } from '@/types/Product'

import * as React from 'react'

import styles from '@/styles/ProductContainer.module.css'
import { ProductImage } from '@/components/product/image'
import { useComponentRegistrar } from '@/hooks/useCustomComponent'
import { ProductDescription } from '@/components/product/description'
import { ProductStepper } from '../stepper'

interface ProductContainerProps {
  product: Product
}

export const ProductContainer: FC<ProductContainerProps> = ({ product }) => {
  const [quantity, setQuantity] = React.useState(0)
  const getComponentFor = useComponentRegistrar()

  const handleQuantitySubtract = React.useCallback(() => {
    const result = Math.max(quantity - 1, 0)
    setQuantity(result)
  }, [quantity])

  const handleQuantityAdd = React.useCallback(() => {
    const result = Math.min(quantity + 1, Number.MAX_SAFE_INTEGER)
    setQuantity(result)
  }, [quantity])

  if (getComponentFor('product')) {
    return getComponentFor('product')!({ product })
  }

  return (
    <article className={styles.container}>
      <ProductImage product={product} />
      <ProductDescription product={product} />
      <ProductStepper value={quantity} onSubtract={handleQuantitySubtract} onAdd={handleQuantityAdd} />
    </article>
  )
}
