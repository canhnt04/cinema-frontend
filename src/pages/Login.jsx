import { useState } from "react";
import SignInModal from "../components/Modals/SignInModal";
import SignUpModal from "./../components/Modals/SignUpModal";
import useNavigateBack from "../hooks/useNavigateBack";

const Login = () => {
  const [mode, setMode] = useState("login");
  const [isClosing, setIsClosing] = useState(false);
  const navigateBack = useNavigateBack();

  const handleClose = () => {
    setIsClosing(true);
    navigateBack();
  };

  if (isClosing) return null;

  return (
    <>
      {mode === "login" ? (
        <SignInModal
          onClose={handleClose}
          switchToSignUp={() => setMode("register")}
        />
      ) : (
        <SignUpModal
          onClose={handleClose}
          switchToSignIn={() => setMode("login")}
        />
      )}
    </>
  );
};

export default Login;
