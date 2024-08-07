import { Navigate, Outlet } from "react-router-dom"
import { routes } from "./routes.js"
import { useContext } from "react"
import { userContext } from "../context/userContext.jsx"

export const ProtectedRoute = () => {
    const {user} = useContext(userContext)
    return user ? <Outlet/> : <Navigate to={routes.login}/>
}