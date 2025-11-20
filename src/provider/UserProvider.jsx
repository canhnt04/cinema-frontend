import { useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useAuth } from "../hooks/useAuth";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { token } = useAuth();

  useEffect(() => {
    if (token) {
      const fakeUser = {
        name: "Cảnh Nguyễn",
        avatar: "https://www.rophim.li/images/avatars/pack4/16.jpg",
      };
      setUser(fakeUser);
    } else {
      setUser(null);
    }
  }, [token]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
