import { useNavigate } from "react-router-dom";

export default function useNavigateBack(fallback = "/") {
  const navigate = useNavigate();
  return () => {
    if (window.history.state?.idx > 0) {
      navigate(-1);
      scrollTo(0, 0);
    } else {
      navigate(fallback);
      scrollTo(0, 0);
    }
  };
}
