import { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { loginService } from "../services/AuthService";
import { getuserInfoService } from "../services/UserService";
import { showToast } from "../helper/cooldownToast";
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const init = async () => {
      const storedToken = localStorage.getItem("accessToken");
      if (storedToken) {
        setIsAuthenticated(true);
        try {
          const info = await getuserInfoService();
          setUser(info.result);
        } catch {
          localStorage.removeItem("accessToken");
        }
      }
      setLoading(false);
    };
    init();
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const res = await loginService(email, password);

      if (res?.code === 0) {
        const token = res.result?.token;
        localStorage.setItem("accessToken", token);

        const userInfo = await getuserInfoService();
        setUser(userInfo.result);

        setIsAuthenticated(true);
      }

      return res;
    } catch (err) {
      console.log(err);

      throw err.response?.data || err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setLoading(true);
    showToast("Đăng xuất thành công!", { type: "success", duration: 2000 });
    navigate("/");
    scrollTo(0, 0);

    setTimeout(() => {
      localStorage.removeItem("accessToken");
      setUser(null);
      setIsAuthenticated(false);

      setLoading(false);
    }, 100);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
