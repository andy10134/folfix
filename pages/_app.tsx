import type { AppProps } from 'next/app'
// These styles apply to every route in the application
import '../app/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}