import { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useUser } from "../hooks/useUser";

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(null); // null = đang check

  const login = (token) => {
    localStorage.setItem("access_token", token);
    setIsLogin(true);
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    setIsLogin(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setIsLogin(!!token);
  }, []);

  return (
    <AuthContext.Provider value={{ isLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
