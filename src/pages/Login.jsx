import { useEffect, useState } from "react";
import useNavigateBack from "./../hooks/useNavigateBack";
import Button from "../components/ui/Button";
import { assets } from "../assets/assets";

const Login = () => {
  const [mode, setMode] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleClose = useNavigateBack();

  useEffect(() => {
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  }, [mode]);
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-b to-[#999]">
      {/* Modal */}
      <form
        action=""
        className="w-full max-w-96 sm:w-[400px] text-center border border-zinc-300/60 rounded-2xl px-8 bg-white"
      >
        <h1 className="text-zinc-900 text-3xl font-semibold mt-10">
          {mode === "login" ? "Login" : "Register"}
        </h1>
        <p className="text-zinc-500 text-sm mt-2 pb-6">
          Please {mode === "login" ? "sign in" : "sign up"} to continue
        </p>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-transparent border border-gray-500/30 outline-none rounded-lg px-3 py-2 text-black"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-transparent border border-gray-500/30 outline-none rounded-lg px-3 py-2 text-black"
          />
          {mode === "register" && (
            <>
              <input
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-transparent border border-gray-500/30 outline-none rounded-lg px-3 py-2 text-black"
              />
            </>
          )}
          {mode === "login" && (
            <>
              <div className="text-right">
                <a className="text-blue-600 text-sm underline" href="">
                  Forgot Password
                </a>
              </div>
            </>
          )}
          <div className="flex gap-x-3 mt-3">
            <Button className="flex-1 py-3" variant="primary" type="button">
              {mode === "login" ? "Sign In" : "Sign Up"}
            </Button>
            <Button
              className="flex-1 py-3"
              variant="secondary"
              type="button"
              onClick={handleClose}
            >
              Exit
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-x-1 my-3">
          <p className="text-black">
            {mode === "login"
              ? "Don't have an account?"
              : "Already have an account?"}
          </p>
          <button
            type="button"
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={() => setMode(mode === "login" ? "register" : "login")}
          >
            {mode === "login" ? "Sign Up" : "Sign In"}
          </button>
        </div>
        {mode === "login" && (
          <>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 mt-2 bg-blue-500 py-3 rounded-full text-white hover:bg-blue-600 transition-colors cursor-pointer leading-none"
            >
              <img
                src={assets.facebookLogo}
                className="h-4 w-4"
                alt="facebookLogo"
              />
              Login with Facebook
            </button>

            <button className="w-full flex items-center gap-2 justify-center mt-3 mb-5 bg-white border hover:bg-gray-200 border-gray-500/30 py-3 rounded-full text-gray-800 cursor-pointer leading-none">
              <img
                src={assets.googleChromeLogo}
                className="w-4 h-4"
                alt="googleChromeLogo"
              />
              Login in with Google
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default Login;
