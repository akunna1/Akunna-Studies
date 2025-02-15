"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const GridResponsive = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-red-100 via-pink-100 to-rose-200 flex flex-col items-center justify-center px-6 py-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6 text-center">
          Responsive Layout with Tailwind CSS Grid
        </h1>

        <p className="mb-8 text-center max-w-4xl mx-auto text-lg sm:text-xl text-gray-700">
          Tailwind CSS makes it easy to create responsive grid layouts that adapt to different screen sizes. Using the grid system, you can define rows and columns for consistent and flexible designs.
        </p>

        {/* Grid Example Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Grid 1</h2>
            <p className="text-gray-600">grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Grid 2</h2>
            <p className="text-gray-600">grid: Applies grid layout to the container, enabling grid-based utilities.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Grid 3</h2>
            <p className="text-gray-600">grid-cols-1: Sets 1 column by default for all screen sizes smaller than sm (items stack vertically).</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Grid 4</h2>
            <p className="text-gray-600">sm:grid-cols-2: On small screens (640px and above), sets the grid to 2 columns.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Grid 5</h2>
            <p className="text-gray-600">lg:grid-cols-3: On large screens (1024px and above), sets the grid to 3 columns.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Grid 6</h2>
            <p className="text-gray-600">gap-6: Adds a 24px gap (1.5rem) between both rows and columns in the grid.</p>
          </div>
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Why Use Tailwind CSS Grid?
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-6">
            The grid system in Tailwind CSS provides a simple and powerful way to create layouts that are both flexible and responsive. By adjusting the number of columns and gaps, you can create designs that look great on any screen size.
          </p>
          <ul className="list-disc text-lg sm:text-xl text-gray-700 space-y-4 text-left mx-8">
            <li>
              <strong>Flexible Layouts:</strong> Easily define rows and columns with the <code className="font-mono text-blue-600">grid-cols-*</code> and <code className="font-mono text-blue-600">gap-*</code> utilities.
            </li>
            <li>
              <strong>Responsive Design:</strong> Use responsive classes like <code className="font-mono text-blue-600">sm:grid-cols-*</code> or <code className="font-mono text-blue-600">lg:grid-cols-*</code> to adjust layouts for different screen sizes.
            </li>
            <li>
              <strong>Consistency:</strong> Achieve uniform spacing and alignment with predefined grid utilities.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GridResponsive;
