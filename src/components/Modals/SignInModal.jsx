import { useState } from "react";
import Button from "./../ui/Button";
import { assets } from "./../../assets/assets";
import { useAuth } from "../../hooks/useAuth";
import { useUser } from "./../../hooks/useUser";
import useNavigateBack from "../../hooks/useNavigateBack";
import { showToast } from "./../../helper/cooldownToast";

const SignInModal = ({ switchToSignUp, onClose }) => {
  const { login } = useAuth();
  const { setUserInfo } = useUser();
  const [loading, setLoading] = useState(true);

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const navigateBack = useNavigateBack();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sucess = login(email, password);
    if (sucess) {
      showToast("Đăng nhập thành công!", { type: "success" });
      setTimeout(() => navigateBack(), 300);
    } else {
      showToast("Error");
    }
    // try {
    //   const res = await loginService(email, password);
    //   login(res.token);
    //   setUserInfo(res.user);
    //   onClose();
    // } catch (err) {
    //   setError(err);
    // } finally {
    //   setLoading(true);
    // }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="w-full max-w-96 sm:w-[400px] text-center border border-zinc-300/60 rounded-2xl px-8 bg-white">
        <h1 className="text-zinc-900 text-3xl font-semibold mt-10">Login</h1>
        <p className="text-zinc-500 text-sm mt-2 pb-6">
          Please sign in to continue
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent border border-gray-500/30 outline-none rounded-lg px-3 py-2 text-black"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-transparent border border-gray-500/30 outline-none rounded-lg px-3 py-2 text-black"
          />

          <div className="text-right">
            <a className="text-blue-600 text-sm underline" href="#">
              Forgot Password?
            </a>
          </div>

          <div className="flex gap-x-3 mt-3">
            <Button
              variant="primary"
              type="submit"
              className="flex-1 py-3 active:scale-95"
            >
              Login
            </Button>
            <Button
              variant="secondary"
              onClick={onClose}
              className="flex-1 py-3 active:scale-95"
            >
              Exit
            </Button>
          </div>
        </form>

        <div className="flex items-center justify-center gap-x-1 my-3">
          <p className="text-black">Don't have an account?</p>
          <button
            type="button"
            onClick={switchToSignUp}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Sign Up
          </button>
        </div>

        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 mt-2 bg-blue-500 py-3 rounded-full text-white hover:bg-blue-600 transition-colors cursor-pointer leading-none"
        >
          <img
            src={assets.facebookLogo}
            alt="facebookLogo"
            className="h-4 w-4"
          />
          Login with Facebook
        </button>

        <button className="w-full flex items-center gap-2 justify-center mt-3 mb-5 bg-white border hover:bg-gray-200 border-gray-500/30 py-3 rounded-full text-gray-800 cursor-pointer leading-none">
          <img
            src={assets.googleChromeLogo}
            alt="googleChromeLogo"
            className="w-4 h-4"
          />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default SignInModal;
