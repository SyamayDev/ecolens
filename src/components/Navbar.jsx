import { Link, useLocation } from "react-router-dom";
import React from "react";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-6 px-4">
      <div className="flex items-center justify-between w-full max-w-6xl bg-gradient-to-r from-green-900/20 to-emerald-900/20 backdrop-blur-xl border border-green-500/20 rounded-2xl px-6 py-4 shadow-2xl hover:border-green-500/30 transition-all duration-300">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-2 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-green-500/50 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
          </div>
          <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent group-hover:from-green-200 group-hover:to-emerald-300 transition-all duration-300">
            EcoLens
          </span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            to="/"
            className={`transition-all duration-300 ${
              isActive("/")
                ? "text-green-300 border-b-2 border-green-400"
                : "text-green-200/70 hover:text-green-300"
            }`}
          >
            Beranda
          </Link>
          <Link
            to="/scan"
            className={`transition-all duration-300 ${
              isActive("/scan")
                ? "text-green-300 border-b-2 border-green-400"
                : "text-green-200/70 hover:text-green-300"
            }`}
          >
            Scan Produk
          </Link>
          <Link
            to="/dashboard"
            className={`transition-all duration-300 ${
              isActive("/dashboard")
                ? "text-green-300 border-b-2 border-green-400"
                : "text-green-200/70 hover:text-green-300"
            }`}
          >
            Dashboard
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-green-300 hover:text-green-200 transition-colors"
          aria-label="menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </nav>
  );
}
