"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/login");
  };

  if (isLoggedIn === null) {
    return (
      <nav className="sticky top-0 z-50 bg-white py-4 px-6 shadow-md">
        <div className="text-gray-500 text-sm">Loading navbar...</div>
      </nav>
    );
  }

  const menuItems = isLoggedIn
    ? [
        { href: "/", label: "Home" },
        { href: "/upload", label: "Upload" },
        { href: "/dashboard", label: "Dashboard" },
      ]
    : [
        { href: "/", label: "Home" },
        { href: "/login", label: "Login" },
        { href: "/register", label: "Register" },
      ];

  return (
    <nav
      className={`sticky top-0 z-50 py-4 px-6 flex justify-between items-center transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <Link href="/" className="flex items-center gap-3">
        <img src="/images/logo.png" alt="Logo" className="h-8 w-auto" />

        <span
          style={{ fontFamily: "var(--font-eurostile)" }}
          className="text-2xl font-bold text-blue-800"
        >
          Meeting Summarizer
        </span>
      </Link>

      <div className="flex items-center gap-6">
        {menuItems.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`text-lg px-3 py-1 rounded-full transition-all duration-300 ${
              pathname === href
                ? "bg-blue-600 text-white font-semibold shadow-md"
                : "text-gray-700 hover:text-blue-700 hover:bg-blue-100"
            }`}
          >
            {label}
          </Link>
        ))}

        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="text-lg px-4 py-1 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}