import { useState } from "react";
import Button from "./../ui/Button";
import { showToast } from "../../helper/cooldownToast";
import { registerService } from "../../services/AuthService";
import FullPageSpinner from "../ui/FullPageSpinner";

const SignUpModal = ({ switchToSignIn, onClose }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (
      fullName.trim() === "" ||
      email.trim() === "" ||
      phone.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      showToast("Vui lòng nhập thông tin đầy đủ!");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      showToast("Mật khẩu xác nhận không khớp!");
      setLoading(false);
      return;
    }

    try {
      const res = await registerService(
        fullName,
        email,
        phone,
        password,
        "CUSTOMER"
      );

      if (res?.code === 0) {
        showToast("Đăng ký tài khoản thành công! Xin mời đăng nhập.", {
          type: "success",
          duration: 2000,
        });
        switchToSignIn();
      }
    } catch (error) {
      if (error?.code === 1002) {
        showToast("Email đã được sử dụng! Vui lòng đăng ký bằng email khác.");
      } else {
        showToast("Có lỗi xảy ra, vui lòng thử lại!");
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  };

  return !loading ? (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-96 sm:w-[400px] text-center border border-zinc-300/60 rounded-2xl px-8 bg-white"
      >
        <h1 className="text-zinc-900 text-3xl font-semibold mt-10">Register</h1>
        <p className="text-zinc-500 text-sm mt-2 pb-6">
          Please sign up to continue
        </p>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full bg-transparent border border-gray-500/30 outline-none rounded-lg px-3 py-2 text-black"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent border border-gray-500/30 outline-none rounded-lg px-3 py-2 text-black"
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full bg-transparent border border-gray-500/30 outline-none rounded-lg px-3 py-2 text-black"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-transparent border border-gray-500/30 outline-none rounded-lg px-3 py-2 text-black"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full bg-transparent border border-gray-500/30 outline-none rounded-lg px-3 py-2 text-black"
          />

          <div className="flex gap-x-3 mt-3">
            <Button type="submit" className="flex-1 py-3 active:scale-95">
              Register
            </Button>
            <Button
              variant="secondary"
              onClick={onClose}
              className="flex-1 py-3 active:scale-95"
            >
              Exit
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-x-1 my-3 mb-5">
          <p className="text-black">Already have an account?</p>
          <button
            type="button"
            onClick={switchToSignIn}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  ) : (
    <FullPageSpinner />
  );
};

export default SignUpModal;
