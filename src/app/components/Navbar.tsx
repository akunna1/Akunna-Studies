// src/app/components/Navbar.tsx
"use client";  // Add this to indicate this is a client-side component

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="p-4">
      <Link href="/" className="text-blue-600">
        <button className="bg-gray-200 px-4 py-2 rounded-lg">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
