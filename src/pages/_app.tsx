import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ComponentRegistrarProvider } from '@/hooks/useCustomComponent'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ComponentRegistrarProvider>
      <Component {...pageProps} />
    </ComponentRegistrarProvider>
  )
}

export default MyApp
