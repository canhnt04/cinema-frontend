import { useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import axiosClient from "../config/axios";

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  const token = localStorage.getItem("access_token");

  const fetchMyInfo = async () => {
    console.log("API get info called.");

    try {
      if (!token) return;
      const res = await axiosClient.get("/user/me");
      if (res) {
        const user = res.result;
        setUserInfo(user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMyInfo();
  }, [token]);

  return (
    <UserContext.Provider value={{ userInfo }}>{children}</UserContext.Provider>
  );
};
