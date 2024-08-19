import { useState } from 'react'
import './App.css'
import { GlobalStyle } from './globalStyle.styled'
import { ThemeProvider } from 'styled-components'
import { dark, light } from './theme'
import { AppRoutes } from './router/AppRoutes.jsx'
import { UserProvider } from './context/userContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { TasksProvider } from './context/taskContext.jsx'

function App() {



  const [intoTheme, setIntoTheme] = useState("light")



  return (
    <>
    <ThemeProvider theme={intoTheme === "light" ? light : dark}>
    <GlobalStyle/>
    <BrowserRouter>
    <UserProvider>
    <TasksProvider>
    <AppRoutes setIntoTheme={setIntoTheme} intoTheme={intoTheme}/>
    </TasksProvider>
    </UserProvider>
    </BrowserRouter>
    </ThemeProvider>
    </>
  )
}

export default App