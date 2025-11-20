import { useState } from "react";
import Button from "./../ui/Button";

const SignUpModal = ({ switchToSignIn, onClose }) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <form className="w-full max-w-96 sm:w-[400px] text-center border border-zinc-300/60 rounded-2xl px-8 bg-white">
        <h1 className="text-zinc-900 text-3xl font-semibold mt-10">Register</h1>
        <p className="text-zinc-500 text-sm mt-2 pb-6">
          Please sign up to continue
        </p>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
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
            <Button variant="primary" className="flex-1 py-3 active:scale-95">
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
  );
};

export default SignUpModal;
