import { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useUser } from "../hooks/useUser";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const { setUser } = useUser();

  useEffect(() => {
    const storedToken = localStorage.getItem("userToken");
    if (storedToken) setToken(storedToken);
  }, []);

  const login = (username, password) => {
    if (username === "admin@gmail.com" && password === "123") {
      const fakeToken = "fake-jwt-token-tancanh";
      localStorage.setItem("userToken", fakeToken);
      setToken(fakeToken);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("userToken");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!token,
        token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
