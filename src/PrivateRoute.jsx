import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { showToast } from "./helper/cooldownToast";
import FullPageSpinner from "./components/ui/FullPageSpinner";

const PrivateRoute = ({
  children,
  requireAuth = false,
  roles = [],
  guestOnly = false,
}) => {
  const { isAuthenticated, user, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (loading) return;

    // guestOnly: đã login
    if (guestOnly && isAuthenticated) {
      const redirectTo = user?.role === "ADMIN" ? "/admin" : "/";
      navigate(redirectTo, { replace: true });
      return;
    }

    // requireAuth: chưa login
    if (requireAuth && !isAuthenticated) {
      showToast("Vui lòng đăng nhập để tiếp tục!", { duration: 2000 });
      navigate("/login", { state: { from: location }, replace: true });
      return;
    }

    // roles: role không hợp lệ
    if (roles.length > 0 && user && !roles.includes(user.role)) {
      const redirectTo = user.role === "ADMIN" ? "/admin" : "/";
      navigate(redirectTo, { replace: true });
      return;
    }
  }, [
    isAuthenticated,
    user,
    loading,
    roles,
    requireAuth,
    guestOnly,
    navigate,
    location,
  ]);

  if (loading) return <FullPageSpinner />;

  return <>{children}</>;
};

export default PrivateRoute;
