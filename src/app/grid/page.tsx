"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const GridResponsive = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-green-50 to-teal-100 flex flex-col items-center justify-center px-6 py-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6 text-center">
          Responsive Layout with Tailwind CSS Grid
        </h1>

        <p className="mb-8 text-center max-w-4xl mx-auto text-lg sm:text-xl text-gray-700">
          Tailwind CSS makes it easy to create responsive grid layouts that adapt to different screen sizes. Using the grid system, you can define rows and columns for consistent and flexible designs.
        </p>

        {/* Grid Example Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Column 1</h2>
            <p className="text-gray-600">Content for the first column goes here. Adjusts based on screen size.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Column 2</h2>
            <p className="text-gray-600">Content for the second column goes here. Adjusts based on screen size.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Column 3</h2>
            <p className="text-gray-600">Content for the third column goes here. Adjusts based on screen size.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Column 4</h2>
            <p className="text-gray-600">Content for the fourth column goes here. Adapts in smaller screens.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Column 5</h2>
            <p className="text-gray-600">Content for the fifth column goes here. Uses Tailwind's grid utilities.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Column 6</h2>
            <p className="text-gray-600">Content for the sixth column goes here. Perfect for responsive layouts.</p>
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
