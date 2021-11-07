type ComponentRegistrarCallback = (aSection: string, theComponent: any) => void

export interface ComponentRegistrarListener {
  addEventListener: (callback: ComponentRegistrarCallback) => void
  removeEventListener: () => void
}
