"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FlexResponsive = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex flex-col items-center justify-start px-6 py-16 sm:py-24">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-600 mb-8 text-center tracking-wide">
          Mastering Tailwind Flexbox: Responsive Layout Design
        </h1>

        {/* Subheading with Description */}
        <p className="text-lg sm:text-xl max-w-4xl mx-auto text-center text-gray-700 mb-10 leading-relaxed">
          Flexbox in Tailwind CSS allows you to create responsive layouts that adapt beautifully to any screen size. Let’s dive into the key utilities and how to use them effectively.
        </p>

        {/* Flexbox Layout Example */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-12 w-full max-w-7xl px-8 py-12 sm:px-16 sm:py-16 rounded-xl shadow-xl">
          {/* Flex Item 1 */}
          <div className="bg-white p-8 rounded-xl shadow-md w-full sm:w-1/3 transform hover:scale-105 transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Flex Item 1</h2>
            <p className="text-gray-600">Flexbox makes it easy to create responsive layouts. This section demonstrates how Flexbox handles layout alignment and spacing.</p>
          </div>
          {/* Flex Item 2 */}
          <div className="bg-white p-8 rounded-xl shadow-md w-full sm:w-1/3 transform hover:scale-105 transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Flex Item 2</h2>
            <p className="text-gray-600">Tailwind's Flex utilities provide fast and responsive layouts. Flexbox handles both alignment and spacing for flexible designs.</p>
          </div>
          {/* Flex Item 3 */}
          <div className="bg-white p-8 rounded-xl shadow-md w-full sm:w-1/3 transform hover:scale-105 transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Flex Item 3</h2>
            <p className="text-gray-600">Flexbox ensures your content adapts to screen sizes dynamically. Here, we use Tailwind to create clean, responsive designs without effort.</p>
          </div>
        </div>

        {/* Flex Definitions Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">Key Flexbox Utilities in Tailwind</h3>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
            Tailwind CSS provides powerful utilities for Flexbox. Here's a quick rundown of the most important ones:
          </p>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">flex</h4>
              <p className="text-gray-600">
                The <code className="font-mono text-indigo-600">flex</code> utility defines a flex container, enabling the use of Flexbox properties for layout and alignment.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">flex-col</h4>
              <p className="text-gray-600">
                The <code className="font-mono text-indigo-600">flex-col</code> utility sets the flex direction to column, stacking child elements vertically.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">sm:flex-row</h4>
              <p className="text-gray-600">
                On small screens and above, <code className="font-mono text-indigo-600">sm:flex-row</code> sets the flex direction to row, aligning child elements horizontally.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">items-center</h4>
              <p className="text-gray-600">
                The <code className="font-mono text-indigo-600">items-center</code> utility aligns child elements along the cross-axis (vertical in a row layout, horizontal in a column layout).
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">justify-between</h4>
              <p className="text-gray-600">
                The <code className="font-mono text-indigo-600">justify-between</code> utility distributes child elements along the main axis with space between them.
              </p>
            </div>
          </div>
        </div>

        {/* Flex vs Grid Section */}
        <div className="mt-20 text-center text-lg sm:text-xl text-gray-700">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">Flexbox vs Grid: When to Use Each</h3>
          <p className="max-w-3xl mx-auto mb-10 leading-relaxed text-gray-600">
            Flexbox and Grid are both powerful layout systems. Here's a quick comparison:
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-16">
            {/* Flexbox Explanation Card */}
            <div className="bg-white p-8 rounded-xl shadow-md w-full sm:w-1/2">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Flexbox</h4>
              <ul className="list-disc text-lg text-gray-600 space-y-4 text-left">
                <li><strong>Best for:</strong> One-dimensional layouts (either row or column).</li>
                <li><strong>Use Case:</strong> Aligning buttons, menus, or navigation bars.</li>
                <li><strong>Control:</strong> Provides control over space along a single axis.</li>
              </ul>
            </div>
            {/* Grid Explanation Card */}
            <div className="bg-white p-8 rounded-xl shadow-md w-full sm:w-1/2">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Grid</h4>
              <ul className="list-disc text-lg text-gray-600 space-y-4 text-left">
                <li><strong>Best for:</strong> Two-dimensional layouts (rows and columns).</li>
                <li><strong>Use Case:</strong> Complex layouts like dashboards or magazine-style grids.</li>
                <li><strong>Control:</strong> Provides precise control over both rows and columns simultaneously.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default FlexResponsive;
