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
      className={`sticky top-0 z-50 py-4 px-6 flex items-center justify-between transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3">
        <img src="/images/logo.jpg" alt="Logo" className="h-8 w-auto" />
        <span
          style={{ fontFamily: "var(--font-eurostile)" }}
          className="text-2xl font-bold text-blue-800"
        >
          Meeting Summarizer
        </span>
      </Link>

      {/* Centered pill menu bar */}
      <div className="mx-auto flex bg-white/80 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-full overflow-hidden shadow-md backdrop-blur-sm text-sm font-medium">
        {menuItems.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`relative px-6 py-2 transition-all duration-300 border-r last:border-none group
              ${
                pathname === href
                  ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md"
                  : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              }
            `}
          >
            <span className="group-hover:underline underline-offset-4 transition duration-300">
              {label}
            </span>
          </Link>
        ))}

        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="px-6 py-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900 transition-all duration-300"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
