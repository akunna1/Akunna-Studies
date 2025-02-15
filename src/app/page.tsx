"use client";

import React from "react";
import Link from "next/link";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-200 to-purple-300 flex flex-col items-center px-6 py-12 sm:py-20 relative">
      {/* Decorative Element 1: Heart */}
      <div className="w-16 h-16 bg-pink-400 rounded-full absolute top-24 right-16"></div>

      {/* Decorative Element 2: Floating Bouncing Dots on the left */}
      <div className="absolute top-52 left-14 space-y-4 z-0">
        <div className="w-8 h-8 bg-teal-200 rounded-full animate-bounce"></div>
        <div className="w-8 h-8 bg-rose-300 rounded-full animate-bounce delay-200"></div>
        <div className="w-8 h-8 bg-purple-300 rounded-full animate-bounce delay-400"></div>
      </div>

      {/* Main Title Section */}
      <header className="text-center mb-12 z-10">
        <h1 className="text-5xl sm:text-6xl font-bold text-pink-600 leading-tight drop-shadow-lg">
          Akunna's Study Hub 🤓
        </h1>
        <p className="text-lg text-purple-500 mt-4 max-w-xl mx-auto italic">
          A cute and cozy corner for my Full Stack Dev journey!
        </p>
      </header>

      {/* Navigation Section */}
      <nav className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xl w-full max-w-md relative z-10">
        <ul className="space-y-6 text-lg sm:text-xl text-purple-700">
          {[{ href: "/usestate", label: "UseState in React" },
            { href: "/useeffect", label: "UseEffect in React" },
            { href: "/flex", label: "Tailwind Flex" },
            { href: "/grid", label: "Tailwind Grid" },
            { href: "/fetch", label: "Fetching Data" },
            { href: "/typescript", label: "JavaScript vs. TypeScript" },
            { href: "/relative", label: "Tailwind Relative vs. Absolute" }].map((item, index) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block text-purple-500 hover:text-pink-600 font-semibold transition-all transform hover:scale-110 hover:translate-x-2"
              >
                {index + 1}. {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer Section */}
      <footer className="mt-16 text-center text-pink-400 text-sm sm:text-base z-10">
        <p className="opacity-80 transition-opacity duration-300 hover:opacity-100">
          Built with ❤️ and a dash of sparkle ✨
        </p>
      </footer>
    </div>
  );
}

export default Home;
