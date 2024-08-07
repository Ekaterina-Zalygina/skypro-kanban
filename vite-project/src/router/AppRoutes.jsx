import { Route, Routes } from "react-router-dom"
import { routes } from "./routes.js"
import { NotFound } from "../pages/NotFound/NotFound.jsx"
import { MainPage } from "../pages/MainPage/MainPage.jsx"
import { LoginPage } from "../pages/Login/LoginPage.jsx"
import { Register } from "../pages/Register/Register.jsx"
import { ProtectedRoute } from "./ProtectedRoute.jsx"
import { ExitPage } from "../pages/ExitPage/ExitPage.jsx"
import { CardPage } from "../pages/CardPage/CardPage.jsx"

export const AppRoutes = ({intoTheme, setIntoTheme}) => {
    
    return (
            <Routes> 
             <Route element={<ProtectedRoute />}>
                <Route path={routes.main} element={<MainPage setIntoTheme={setIntoTheme} intoTheme={intoTheme}/>}/>
                <Route path={routes.exit} element={<ExitPage/>}/>
                <Route path={routes.card} element={<CardPage/>}/>
             </Route>
                <Route path={routes.notFound} element={<NotFound />}/>
                <Route path={routes.register} element={<Register/>}/>
                <Route path={routes.login} element={<LoginPage/>}/>
            </Routes>
    )
}