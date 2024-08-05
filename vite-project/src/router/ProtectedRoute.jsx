import { Navigate, Outlet } from "react-router-dom"
import { routes } from "./routes.js"

export const ProtectedRoute = ({user}) => {
    return user ? <Outlet/> : <Navigate to={routes.login}/>
}