import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../router/routes";

export const userContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const navigate = useNavigate();

  function login(data) {
    setUser(data);
    navigate(routes.main);
  }

  function logout() {
    setUser(null);
    navigate(routes.login);
  }

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <userContext.Provider value={{ user, login, logout }}>
      {children}
    </userContext.Provider>
  );
};
