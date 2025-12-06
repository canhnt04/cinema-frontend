import { useEffect, useState } from "react";
import Button from "./../ui/Button";
import { showToast } from "./../../helper/cooldownToast";
import { useAuth } from "./../../hooks/useAuth";
import FullPageSpinner from "./../ui/FullPageSpinner";
import { useNavigate } from "react-router-dom";

const SignInModal = ({ switchToSignUp, onClose }) => {
  const { login, user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (email.trim() === "" || password.trim() === "") {
      showToast("Vui lòng nhập thông tin đầy đủ!");
      setLoading(false);
      return;
    }

    try {
      const res = await login(email, password);

      if (res?.code === 0) {
        showToast("Đăng nhập thành công!", { type: "success", duration: 2000 });
      }
    } catch (error) {
      if (error?.code === 1003) {
        showToast("Tài khoản không tồn tại! Vui lòng đăng ký.");
      } else if (error?.code === 1006) {
        showToast("Mật khẩu không hợp lệ!");
      } else {
        showToast("Có lỗi xảy ra, vui lòng thử lại!");
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      if (user?.role === "ADMIN") navigate("/admin", { replace: true });
      else if (user?.role === "CUSTOMER") navigate("/", { replace: true });
    }
  }, [user, navigate]);

  return !loading ? (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="w-full max-w-96 sm:w-[400px] text-center border border-zinc-300/60 rounded-2xl px-8 bg-white">
        <h1 className="text-zinc-900 text-3xl font-semibold mt-10">Login</h1>
        <p className="text-zinc-500 text-sm mt-2 pb-6">
          Please sign in to continue
        </p>

        <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
          <input
            type="text"
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
            <Button type="submit" className="flex-1 py-3 active:scale-95">
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

        {/* <button
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
        </button> */}
      </div>
    </div>
  ) : (
    <FullPageSpinner />
  );
};

export default SignInModal;
