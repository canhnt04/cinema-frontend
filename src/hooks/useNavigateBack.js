import { useNavigate } from "react-router-dom";

export default function useNavigateBack(fallback = "/") {
  const navigate = useNavigate();

  return () => {
    if (window.history.state) {
      navigate(-1);
    } else {
      navigate(fallback);
    }
  };
}
