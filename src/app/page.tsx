"use client";

import React from "react";
import Link from "next/link";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex flex-col items-center justify-center px-4 py-16 sm:py-24">
      {/* Main Title with Animation */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-10 text-center tracking-tight transform transition duration-1000 ease-out hover:scale-105 hover:text-indigo-800">
        Akunna Studies 🤓
      </h1>

      {/* Navigation Card */}
      <nav className="bg-white p-8 sm:p-12 rounded-lg shadow-2xl w-full max-w-md transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
        <ul className="space-y-6 sm:space-y-8 text-lg sm:text-xl text-gray-800">
          {/* Navigation Links */}
          <li>
            <Link 
              href="/usestate"
              className="block text-indigo-600 hover:text-indigo-800 font-semibold transition-all duration-300 transform hover:scale-105 hover:translate-x-1"
            >
              1. UseState in React
            </Link>
          </li>
          <li>
            <Link 
              href="/useeffect"
              className="block text-indigo-600 hover:text-indigo-800 font-semibold transition-all duration-300 transform hover:scale-105 hover:translate-x-1"
            >
              2. UseEffect in React
            </Link>
          </li>
          <li>
            <Link 
              href="/flex"
              className="block text-indigo-600 hover:text-indigo-800 font-semibold transition-all duration-300 transform hover:scale-105 hover:translate-x-1"
            >
              3. Tailwind Flex
            </Link>
          </li>
          <li>
            <Link 
              href="/grid"
              className="block text-indigo-600 hover:text-indigo-800 font-semibold transition-all duration-300 transform hover:scale-105 hover:translate-x-1"
            >
              4. Tailwind Grid
            </Link>
          </li>
        </ul>
      </nav>

      {/* Animated footer section */}
      <footer className="mt-16 text-center text-gray-600 text-sm sm:text-lg">
        <p className="opacity-70 transition-opacity duration-300 hover:opacity-100">
          Built with ❤️ by Akunna
        </p>
      </footer>
    </div>
  );
}

export default Home;
