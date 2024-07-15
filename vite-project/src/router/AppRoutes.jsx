import { BrowserRouter, Route, Routes } from "react-router-dom"
import { routes } from "./routes.js"
import { NotFound } from "../pages/NotFound/NotFound.jsx"
import { MainPage } from "../pages/MainPage/MainPage.jsx"
import { LoginPage } from "../pages/Login/LoginPage.jsx"
import { Register } from "../pages/Register/Register.jsx"

export const AppRoutes = ({intoTheme, setIntoTheme}) => {
    return (
        <BrowserRouter>
            <Routes>  
                <Route path={routes.main} element={<MainPage setIntoTheme={setIntoTheme} intoTheme={intoTheme}/>}/>
                <Route path={routes.notFound} element={<NotFound />}/>
                <Route path={routes.register} element={<Register/>}/>
                <Route path={routes.login} element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}