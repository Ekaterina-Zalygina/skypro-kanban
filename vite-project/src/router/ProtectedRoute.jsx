import { Navigate, Outlet } from "react-router-dom"
import { routes } from "./routes.js"

export const ProtectedRoute = ({isAuth}) => {
    return isAuth ? <Outlet/> : <Navigate to={routes.login}/>
}