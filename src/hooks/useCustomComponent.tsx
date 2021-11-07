import { RegisterComponentListener } from '@/lib/CustomComponentRegistrar'
import type { FC } from 'react'
import * as React from 'react'
import { useMemo, useCallback, useState, useEffect, useContext, createContext } from 'react'

const ComponentRegistrarContext = createContext<(aSection: string) => ((props: any) => JSX.Element | null) | null>(
  () => null
)

export const ComponentRegistrarProvider: FC = ({ children }) => {
  const { current: customComponentListener } = React.useRef(new RegisterComponentListener())
  const [components, setComponent] = useState<Record<string, () => JSX.Element | null>>({})

  useEffect(() => {
    customComponentListener.addEventListener((theSection, theComponent) =>
      setComponent((components) => ({ ...components, [theSection]: theComponent }))
    )

    return () => {
      customComponentListener.removeEventListener()
    }
  }, [setComponent, customComponentListener])

  const getComponentFor = useCallback((aSection: string) => components[aSection] || null, [components])

  return <ComponentRegistrarContext.Provider value={getComponentFor}>{children}</ComponentRegistrarContext.Provider>
}

export function useComponentRegistrar() {
  const context = useContext(ComponentRegistrarContext)

  if (context === undefined) {
    throw new Error('error')
  }

  return context
}
