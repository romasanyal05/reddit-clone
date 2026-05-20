"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Login Successful 🚀");
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-white to-orange-200 px-4">

      <div className="w-full max-w-md bg-white/80 backdrop-blur-lg border border-white/40 shadow-2xl rounded-3xl p-10">

        <div className="text-center mb-8">
          <h1 className="text-5xl font-extrabold text-orange-500">
            Reddit
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Welcome back 👋
          </p>
        </div>

        <div className="space-y-5">

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-2xl font-bold text-lg shadow-lg transition-all duration-300"
          >
            Login
          </button>
        </div>

        <p className="text-center text-gray-500 mt-6">
  Don’t have an account?
  
  <a
    href="/signup"
    className="text-orange-500 font-semibold ml-1 hover:underline"
  >
    Sign Up
  </a>
</p>

      </div>
    </div>
  );
}