"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FetchDataPage = () => {
  // Vanilla JS Fetch Data States
  const [vanillaData, setVanillaData] = useState<any>(null); 
  const [vanillaError, setVanillaError] = useState<string | null>(null);

  // Next.js Fetch Data States
  const [nextData, setNextData] = useState<any>(null); 
  const [nextError, setNextError] = useState<string | null>(null);

  // Vanilla JS Fetch function
  const fetchVanillaData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setVanillaData(data))
      .catch((error) => setVanillaError("Error fetching data"));
  };

  // Next.js Fetch function using useEffect
  const fetchNextData = () => {
    setNextError(null); 
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setNextData(data))
      .catch((error) => setNextError("Error fetching data"));
  };

  // Reset Functions for each section
  const resetVanillaData = () => {
    setVanillaData(null);
    setVanillaError(null);
  };

  const resetNextData = () => {
    setNextData(null);
    setNextError(null);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex flex-col items-center justify-start px-6 py-16 sm:py-24">
        
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-black mb-8 text-center tracking-wide">
          Fetch Data from an API: Vanilla JS vs Next.js
        </h1>

        {/* Vanilla JS Section */}
        <div className="w-fit max-w-7xl px-8 py-12 sm:px-16 sm:py-16 rounded-xl shadow-xl bg-white mb-12 transform transition-transform duration-300 ease-in-out hover:scale-105">
          <h2 className="text-3xl font-bold text-indigo-600 mb-4 text-center hover:text-indigo-800">
            1. Vanilla JS: Fetching Data
          </h2>
          <p className="text-lg text-gray-700 mb-6 text-center">
            This section shows how to fetch data from an API using vanilla JavaScript with a button click.
          </p>
          <div className="flex flex-col gap-6 items-center">
            <button
              className="bg-indigo-600 text-white w-fit px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
              onClick={fetchVanillaData}
            >
              Fetch Data (Vanilla JS)
            </button>
            <button
              className="bg-red-600 text-white w-fit px-6 py-3 rounded-md hover:bg-red-700 transition duration-300 transform hover:scale-105"
              onClick={resetVanillaData}
            >
              Reset Data (Vanilla JS)
            </button>
            {vanillaError && <p className="text-red-600 text-center mt-4">{vanillaError}</p>}
            {vanillaData && (
              <div className="bg-gray-100 p-6 rounded-md mt-4 w-full md:w-fit shadow-lg transition-all">
                <h3 className="font-semibold">Fetched Data (Vanilla JS)</h3>
                <pre className="overflow-x-auto">{JSON.stringify(vanillaData, null, 2)}</pre>
              </div>
            )}
          </div>
        </div>

        {/* Vanilla JS Explanation */}
        <div className="w-fit max-w-7xl px-8 py-12 sm:px-16 sm:py-16 rounded-xl shadow-xl bg-white mb-12">
          <h2 className="text-3xl font-bold text-indigo-600 mb-4 text-center">
            Vanilla JS Code Explained
          </h2>
          <div className="bg-gray-100 p-6 rounded-md shadow-lg w-fit">
            <h3 className="text-2xl font-bold text-indigo-600 mb-4 text-center">Vanilla JS Code</h3>
            <pre className="overflow-x-auto">{`
function fetchVanillaData() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => setVanillaData(data))
    .catch((error) => setVanillaError("Error fetching data"));
}

<button onClick={fetchVanillaData}>Fetch Data (Vanilla JS)</button>
            `}</pre>
            <ul className="text-lg text-gray-700 mt-4">
              <li>We are using the <strong>fetch()</strong> API to fetch data from the endpoint.</li>
              <li>We update the state with the fetched data using <strong>setVanillaData</strong>.</li>
              <li>If an error occurs, it is caught and the <strong>vanillaError</strong> state is updated.</li>
            </ul>
          </div>
        </div>

        {/* Next.js Section */}
        <div className="w-fit max-w-7xl px-8 py-12 sm:px-16 sm:py-16 rounded-xl shadow-xl bg-white mb-12 transform transition-transform duration-300 ease-in-out hover:scale-105">
          <h2 className="text-3xl font-bold text-indigo-600 mb-4 text-center hover:text-indigo-800">
            2. Next.js: Fetching Data with useState and useEffect
          </h2>
          <p className="text-lg text-gray-700 mb-6 text-center">
            This section demonstrates how to fetch data in Next.js using the <code className="text-indigo-600 font-mono">useState</code> and{" "}
            <code className="text-indigo-600 font-mono">useEffect</code> hooks.
          </p>
          <div className="flex flex-col gap-6 items-center">
            <button
              className="bg-indigo-600 text-white w-fit px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
              onClick={fetchNextData}
            >
              Fetch Data (Next.js)
            </button>
            <button
              className="bg-red-600 text-white w-fit px-6 py-3 rounded-md hover:bg-red-700 transition duration-300 transform hover:scale-105"
              onClick={resetNextData}
            >
              Reset Data (Next.js)
            </button>
            {nextError && <p className="text-red-600 text-center mt-4">{nextError}</p>}
            {nextData && (
              <div className="bg-gray-100 p-6 rounded-md mt-4 w-full md:w-fit shadow-lg transition-all">
                <h3 className="font-semibold">Fetched Data (Next.js)</h3>
                <pre>{JSON.stringify(nextData, null, 2)}</pre>
              </div>
            )}
          </div>
        </div>

        {/* Next.js Explanation */}
        <div className="w-fit max-w-7xl px-8 py-12 sm:px-16 sm:py-16 rounded-xl shadow-xl bg-white mb-12">
          <h2 className="text-3xl font-bold text-indigo-600 mb-4 text-center">
            Next.js Code Explained
          </h2>
          <div className="bg-gray-100 p-6 rounded-md shadow-lg w-fit">
            <h3 className="text-2xl font-bold text-indigo-600 mb-4 text-center">Next.js Code (useState & useEffect)</h3>
            <pre className="overflow-x-auto">{`
const [nextData, setNextData] = useState(null);
const [nextError, setNextError] = useState(null);

const fetchNextData = () => {
  setNextError(null);
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => setNextData(data))
    .catch((error) => setNextError("Error fetching data"));
};

useEffect(() => {
  fetchNextData();
}, []);
<button onClick={fetchNextData}>Fetch Data (Next.js)</button>
            `}</pre>
            <ul className="text-lg text-gray-700 mt-4">
              <li>We use <strong>useState</strong> to manage the state for both data and error.</li>
              <li>We use <strong>useEffect</strong> to fetch data when the component mounts.</li>
              <li>The <strong>useEffect</strong> hook runs once after the component is mounted, ensuring data is fetched when the component is rendered for the first time.</li>
            </ul>
          </div>
        </div>

        {/* Key Differences Section */}
        <div className="w-fit max-w-7xl px-8 py-12 sm:px-16 sm:py-16 rounded-xl shadow-xl bg-white mb-12">
          <h2 className="text-3xl font-bold text-indigo-600 mb-4 text-center">
            Key Differences Between Vanilla JS and Next.js (useState & useEffect)
          </h2>
          <p className="text-lg text-gray-700 mb-6 text-left">
            While the basic concept of fetching data remains the same, Next.js introduces additional hooks to manage state and lifecycle events more declaratively.
          </p>
          <ul className="text-lg text-gray-700 mt-4 space-y-2">
            <li><strong>Vanilla JS:</strong> You handle data fetching and error handling manually with the <strong>fetch()</strong> API.</li>
            <li><strong>Next.js:</strong> You use React hooks (<strong>useState</strong> and <strong>useEffect</strong>) to manage state and handle side effects like fetching data on component mount.</li>
            <li><strong>Next.js:</strong> The <strong>useEffect</strong> hook ensures that the fetch operation happens once when the component mounts.</li>
          </ul>
        </div>

      </div>

      <Footer />
    </>
  );
};

export default FetchDataPage;
