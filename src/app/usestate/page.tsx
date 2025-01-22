"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const UseStateExplanation = () => {
  const [x, setX] = useState(0); // x starts at 0

  const handleReset = () => setX(0); // Reset x to 0

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex flex-col items-center justify-center px-6 py-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6 text-center">
        useState Explained with Math Example
      </h1>

      <p className="mb-8 text-center max-w-4xl mx-auto text-lg sm:text-xl text-gray-700">
        <span className="font-semibold">Definition: </span>think of useState as a variable (i.e x) that stores a value and allows you to update it over time. It’s similar to defining a variable in math that can change.
      </p>

      {/* Explanation with Mathematical Equations */}
      <div className="text-center mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
          Mathematical Explanation
        </h2>
        <p className="text-lg sm:text-xl text-gray-700">
          Imagine a simple equation: <br />
          <code className="font-mono text-blue-600">f(x) = x + 1</code> <br />
          Where <code className="font-mono">x</code> starts at <code className="font-mono">0</code>.
        </p>
        <p className="text-lg sm:text-xl text-gray-700 mt-4">
          Each time you click the button, the value of <code className="font-mono">x</code> increases by 1.
        </p>
      </div>

      {/* Interactive Buttons to Change State */}
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <button
          onClick={() => setX(x + 1)} // On button click, increment x by 1
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-xl hover:bg-blue-600 hover:scale-105 transition duration-300"
        >
          Increment x
        </button>
        <button
          onClick={handleReset} // Reset x to 0
          className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-xl hover:bg-red-600 hover:scale-105 transition duration-300"
        >
          Reset x
        </button>
      </div>

      {/* Display Current State */}
      <div className="mt-8 text-center">
        <p className="text-lg sm:text-xl text-gray-700 mb-2">
          Current Value of <code className="font-mono text-blue-600">x</code>:
        </p>
        <p className="text-4xl font-bold text-blue-600">{x}</p>
        <p className="text-sm text-gray-500 mt-2">
          This is the result of <code className="font-mono">x + 1</code> after each button click.
        </p>
      </div>

      {/* Importance of useState Section */}
      <div className="mt-16 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
          How is this important in web development?
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 mb-6">
          The <code className="font-mono text-blue-600">useState</code> hook is crucial in React as it allows components to maintain and update their state independently. Here are a few examples of how <code className="font-mono text-blue-600">useState</code> can be used in real web applications:
        </p>
        
        <ul className="list-disc text-lg sm:text-xl text-gray-700 space-y-4 text-left mx-8">
          <li>
            <strong>Forms and Input Validation:</strong> Keep track of user input as they fill out forms (e.g., name, email, password fields). With <code className="font-mono text-blue-600">useState</code>, you can manage the state of each input and validate it dynamically.
          </li>
          <li>
            <strong>Dynamic User Interfaces:</strong> Toggle between different UI states, such as showing and hiding modal windows or dropdown menus. By using <code className="font-mono text-blue-600">useState</code>, you can dynamically update the UI based on user interactions.
          </li>
          <li>
            <strong>Interactive Features:</strong> Implement features like a shopping cart, where the quantity of items in the cart changes as users add or remove items. Each cart update is tracked by <code className="font-mono text-blue-600">useState</code>.
          </li>
          <li>
            <strong>Fetching Data:</strong> Manage the state of API calls or data fetching, such as loading states and error handling. For example, you can show a loading spinner while waiting for an API response and then update the state with the fetched data.
          </li>
        </ul>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default UseStateExplanation;
