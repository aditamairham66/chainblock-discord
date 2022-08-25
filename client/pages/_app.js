import '../styles/globals.css'
import { DiscordProvider } from '../context/context'

function MyApp({ Component, pageProps }) {
  return (
    <DiscordProvider>
      <Component {...pageProps} />
    </DiscordProvider>
  )
}

export default MyApp
