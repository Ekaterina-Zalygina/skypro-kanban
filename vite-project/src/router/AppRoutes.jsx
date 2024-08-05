import { BrowserRouter, Route, Routes } from "react-router-dom"
import { routes } from "./routes.js"
import { NotFound } from "../pages/NotFound/NotFound.jsx"
import { MainPage } from "../pages/MainPage/MainPage.jsx"
import { LoginPage } from "../pages/Login/LoginPage.jsx"
import { Register } from "../pages/Register/Register.jsx"
import { ProtectedRoute } from "./ProtectedRoute.jsx"
import { useState } from "react"
import { ExitPage } from "../pages/ExitPage/ExitPage.jsx"
import { CardPage } from "../pages/CardPage/CardPage.jsx"

export const AppRoutes = ({intoTheme, setIntoTheme}) => {
    const [user, setUser] = useState(null)
    return (
        <BrowserRouter>
            <Routes> 
             <Route element={<ProtectedRoute user={user}/>}>
                <Route path={routes.main} element={<MainPage setIntoTheme={setIntoTheme} intoTheme={intoTheme} user={user} setUser={setUser}/>}/>
                <Route path={routes.exit} element={<ExitPage setUser={user}/>}/>
                <Route path={routes.card} element={<CardPage/>}/>
             </Route>
                <Route path={routes.notFound} element={<NotFound />}/>
                <Route path={routes.register} element={<Register/>}/>
                <Route path={routes.login} element={<LoginPage setUser={setUser}/>}/>
            </Routes>
        </BrowserRouter>
    )
}