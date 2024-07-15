import { useState } from 'react'
import './App.css'
import { GlobalStyle } from './globalStyle.styled'
import { ThemeProvider } from 'styled-components'
import { dark, light } from './theme'
import { AppRoutes } from './router/AppRoutes.jsx'

function App() {



  const [intoTheme, setIntoTheme] = useState("light")



  return (
    <>
    <ThemeProvider theme={intoTheme === "light" ? light : dark}>
    <GlobalStyle/>
    <AppRoutes setIntoTheme={setIntoTheme} intoTheme={intoTheme}/>
     
    </ThemeProvider>
    </>
  )
}

export default App