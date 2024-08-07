import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../router/routes";

export const userContext = createContext(null)

export const UserProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const Navigation = useNavigate()

    function login(data) {
        setUser(data)
			Navigation(routes.main)
    }

    function logout() {
       setUser(null)
        Navigation(routes.login)      
    }

    return (
        <userContext.Provider value={{logout, login, user}}>{children}</userContext.Provider>
    )
}
