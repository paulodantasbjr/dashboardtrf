import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../design/styles/globalStyles'
import { darkTheme } from '../design/styles/theme'
import { DataProvider } from '../store/globalState'
import { Notify } from '../components/Notify'

export default function App({ Component, pageProps }) {
  return (
    <DataProvider>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <Notify />
        <Component {...pageProps} />
      </ThemeProvider>
    </DataProvider>
  )
}
