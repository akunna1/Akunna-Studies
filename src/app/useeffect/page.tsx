"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const UseEffectExplanation = () => {
  const [x, setX] = useState(0); // Initial state x = 0

  useEffect(() => {
    // Effect: This function runs every time x changes
    console.log(`Effect: f(x) = ${x + 5}`);
  }, [x]); // Dependency array: Effect runs when x changes

  const handleReset = () => setX(0); // Reset x to 0

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-teal-100 flex flex-col items-center justify-center px-6 py-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6 text-center">
        useEffect Explained with Math Example
      </h1>

      <p className="text-center max-w-4xl mx-auto text-lg sm:text-xl text-gray-700 mb-8">
        <span className="font-semibold">Definition: </span>useEffect runs code after the component renders. It's like an equation that gets calculated once the system is in a particular state (i.e., after the component is mounted or a dependency has changed).
      </p>

      {/* Mathematical Explanation */}
      <div className="text-center mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
          Mathematical Explanation
        </h2>
        <p className="text-lg sm:text-xl text-gray-700">
          Imagine an equation: <br />
          <code className="font-mono text-green-600">f(x) = x + 5</code>, where{" "}
          <code className="font-mono">x</code> starts at{" "}
          <code className="font-mono">0</code>.
        </p>
        <p className="text-lg sm:text-xl text-gray-700 mt-4">
          When <code className="font-mono">x</code> changes (e.g., you click a
          button to update it), the function <code className="font-mono">f(x)</code>{" "}
          recalculates the result: <code className="font-mono">f(x) = x + 5</code>.
        </p>
        <p className="text-lg sm:text-xl text-gray-700 mt-4">
          With <code className="font-mono">useEffect</code>, you can run this recalculation (or any
          other side effect) whenever <code className="font-mono">x</code>{" "}
          changes.
        </p>
      </div>

      {/* Interactive Buttons to Demonstrate useEffect */}
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <button
          onClick={() => setX(x + 1)} // Increment x by 1
          className="px-6 py-3 bg-teal-500 text-white rounded-lg shadow-xl hover:bg-teal-600 hover:scale-105 transition duration-300"
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
          Current Value of <code className="font-mono text-green-600">x</code>:
        </p>
        <p className="text-4xl font-bold text-green-600">{x}</p>
      </div>

      {/* Importance of useEffect Section */}
      <div className="mt-16 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
          How is this important in web development?
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 mb-6">
          The <code className="font-mono text-green-600">useEffect</code> hook
          is critical in React for handling side effects in functional
          components. Here are a few common examples where you’d use{" "}
          <code className="font-mono text-green-600">useEffect</code>:
        </p>

        <ul className="list-disc text-lg sm:text-xl text-gray-700 space-y-4 text-left mx-8">
          <li>
            <strong>Data Fetching:</strong> You can use <code className="font-mono text-green-600">useEffect</code> to fetch data from an API when the component mounts or when a dependency changes.
          </li>
          <li>
            <strong>Event Listeners:</strong> You can use <code className="font-mono text-green-600">useEffect</code> to add event listeners (e.g., window resize, scroll) and clean them up when the component unmounts.
          </li>
          <li>
            <strong>Subscriptions:</strong> You can use <code className="font-mono text-green-600">useEffect</code> for subscribing to a data source or websocket and cleaning up the subscription when the component unmounts.
          </li>
          <li>
            <strong>State Synchronization:</strong> If you need to synchronize component state with external storage (e.g., local storage, session storage), <code className="font-mono text-green-600">useEffect</code> allows you to run the effect after the state updates.
          </li>
        </ul>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default UseEffectExplanation;
