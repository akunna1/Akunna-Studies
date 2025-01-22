"use client";

import React from 'react';
import Link from 'next/link';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-8 text-center">
        Akunna Studies 🤓
      </h1>
      
      <nav className="bg-white p-6 sm:p-10 rounded-lg shadow-2xl w-full max-w-md transition-all duration-300 ease-in-out hover:scale-105">
        <ul className="space-y-4 sm:space-y-6 text-lg sm:text-xl text-gray-800">
          <li>
            <Link 
              href="/usestate"
              className="block text-blue-600 hover:text-blue-800 font-semibold transition duration-300 transform hover:scale-105"
            >
              1. UseState in React
            </Link>
          </li>
          <li>
            <Link 
              href="/useeffect"
              className="block text-blue-600 hover:text-blue-800 font-semibold transition duration-300 transform hover:scale-105"
            >
              2. UseEffect in React
            </Link>
          </li>
          <li>
            <Link 
              href="/useeffect"
              className="block text-blue-600 hover:text-blue-800 font-semibold transition duration-300 transform hover:scale-105"
            >
              3. Tailwind Flex
            </Link>
          </li>
          <li>
            <Link 
              href="/useeffect"
              className="block text-blue-600 hover:text-blue-800 font-semibold transition duration-300 transform hover:scale-105"
            >
              4. Tailwind Grid
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
