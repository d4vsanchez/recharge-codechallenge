import type { FC } from 'react'

import styles from '@/styles/ProductStepper.module.css'

interface ProductStepperProps {
  value: number
  onSubtract: () => void
  onAdd: () => void
}

export const ProductStepper: FC<ProductStepperProps> = ({ value, onSubtract, onAdd }) => {
  return (
    <div className={styles.container}>
      <button onClick={onSubtract} className={styles.btn} disabled={value === 0}>
        -
      </button>

      <span className={styles.value}>{value}</span>

      <button onClick={onAdd} className={styles.btn}>
        +
      </button>
    </div>
  )
}
