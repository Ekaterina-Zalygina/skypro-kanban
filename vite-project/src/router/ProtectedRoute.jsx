import { Outlet } from "react-router-dom"
import { LoginPage } from "../pages/Login/LoginPage.jsx"

export const ProtectedRoute = () => {
    let isAuth = false
    return isAuth ? <Outlet/> : <LoginPage/>
}