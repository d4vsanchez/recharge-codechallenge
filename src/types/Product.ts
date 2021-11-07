interface ProductVariant {
  id: number
  title: string
  option1: string | null
  option2: string | null
  option3: string | null
  sku: string
  requires_shipping: boolean
  taxable: boolean
  featured_image: string | null
  available: boolean
  name: string
  public_title: string | null
  options: Array<string>
  price: number
  weight: number
  compare_at_price: any
  inventory_management: string
  barcode: string
  requires_selling_plan: boolean
  selling_plan_allocations: Array<string>
}

interface ProductMedia {
  alt: string | null
  id: number
  position: number
  preview_image: {
    aspect_ratio: number
    height: number
    width: number
    src: string
  }
  aspect_ratio: number
  height: number
  media_type: string
  src: string
  width: number
}

export interface Product {
  id: number
  title: string
  handle: string
  description: string
  published_at: string
  created_at: string
  vendor: string
  type: string
  tags: Array<string>
  price: number
  price_min: number
  price_max: number
  available: boolean
  price_varies: boolean
  compare_at_price: any
  compare_at_price_min: number
  compare_at_price_max: number
  compare_at_price_varies: boolean
  variants: Array<ProductVariant>
  images: Array<string>
  featured_image: string
  options: Array<string>
  media: Array<ProductMedia>
  requires_selling_plan: boolean
  selling_plan_groups: Array<string>
  content: string
}
