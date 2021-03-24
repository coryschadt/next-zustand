import { AllModals } from '../components/all-modals'
import '../styles/globals.scss'
import '../styles/modals.scss'

function App ({ Component, pageProps }) {
  return (
    <>
      <AllModals />
      <Component {...pageProps} />
    </>
  )
}

export default App

