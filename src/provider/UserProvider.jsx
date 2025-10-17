import { useState } from "react";
import { UserContext } from "../context/UserContext";

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const login = (data) => setUserInfo(data);
  const logout = () => setUserInfo(null);

  return (
    <UserContext.Provider value={{ userInfo, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
