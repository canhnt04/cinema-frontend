import React, { useState } from "react";
import Overlay from "./../components/Overlay";
import useNavigateBack from "../hooks/useNavigateBack";

export default function Login() {
  const [mode, setMode] = useState("signin");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleClose = useNavigateBack("/");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <Overlay onClose={handleClose} />
      {/* Modal */}
      <div className="relative bg-white w-full rounded-xl shadow-lg max-w-sm p-6 z-10">
        <h2 className="text-lg font-semibold mb-4 text-black">
          {mode === "signin" ? "Sign In" : "Sign Up"}
        </h2>

        <form className="space-y-4">
          {mode === "signin" && (
            <>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 text-black"
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 text-black"
              />
            </>
          )}

          {mode === "signup" && (
            <>
              <input
                type="text"
                placeholder="Full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 text-black"
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 text-black"
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 text-black"
              />

              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 text-black"
              />
            </>
          )}

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-400 cursor-pointer"
          >
            {mode === "signin" ? "Sign In" : "Sign Up"}
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          {mode === "signin" ? (
            <>
              Don't have an account?{" "}
              <button
                className="text-red-500 cursor-pointer"
                onClick={() => setMode("signup")}
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already an account?{" "}
              <button
                className="text-red-500 cursor-pointer"
                onClick={() => setMode("signin")}
              >
                Sign In
              </button>
            </>
          )}
        </p>

        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 cursor-pointer"
          onClick={handleClose}
        >
          X
        </button>
      </div>
    </div>
  );
}
