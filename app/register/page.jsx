"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = () => {
    if (email && password) {
      localStorage.setItem("token", "demo_token");
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black bg-opacity-70 relative overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover z-0 brightness-50"
      >
        <source src="/images/background.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 max-w-md w-full bg-white/20 backdrop-blur-md p-8 rounded-xl shadow-xl animate-fade-in">
        <h2 className="text-3xl font-bold text-center text-white mb-6" style={{ fontFamily: "var(--font-eurostile)" }}>
          Register
        </h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-white bg-white/40 text-black px-4 py-2 mb-4 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-white bg-white/40 text-black px-4 py-2 mb-6 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleRegister}
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-all duration-300"
        >
          Sign Up
        </button>
        <p className="text-center mt-4 text-sm text-white">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-200 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

