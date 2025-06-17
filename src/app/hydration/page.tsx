"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Hydration = () => {
  const [showFAQ, setShowFAQ] = useState(false);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 px-4 py-10 text-gray-800 md:px-10">
        <section className="max-w-3xl mx-auto">
          <div className="bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl p-6 md:p-10 transition-transform transform hover:scale-[1.01]">
            <h1 className="text-4xl font-extrabold mb-4 text-purple-700 drop-shadow-md">
              What is a Hydration Error in Next.js 13+?
            </h1>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              A <span className="font-semibold text-red-500">hydration error</span> happens when
              the HTML that is sent from the server doesn’t exactly match what
              React expects on the client. This mismatch causes the app to “break”
              when trying to connect the two.
            </p>

            <div className="bg-gradient-to-r from-cyan-100 to-blue-100 border border-blue-200 rounded-xl p-5 mb-6 shadow-lg">
              <h2 className="text-xl font-bold mb-2 text-blue-700">
                🌊 In Simple Terms:
              </h2>
              <p className="leading-relaxed text-gray-800">
                The server gives your browser a static HTML page, and React
                tries to make it interactive. If what the browser sees isn’t the
                same as what React expects, the hydration fails!
              </p>
            </div>

            <h2 className="text-xl font-semibold mb-3 text-pink-700">
              ⚠️ Common Causes
            </h2>
            <ul className="list-disc list-inside mb-6 space-y-2 text-gray-800">
              <li>
                Using <code className="bg-gray-200 px-1 rounded">Math.random()</code> or <code className="bg-gray-200 px-1 rounded">Date.now()</code> directly
              </li>
              <li>Client-only browser APIs rendered on the server</li>
              <li>Differences in rendering logic (e.g., screen size)</li>
            </ul>

            <h2 className="text-xl font-semibold mb-3 text-green-700">
              ✅ How to Fix It
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              <li>Move dynamic code into <code className="bg-gray-200 px-1 rounded">useEffect()</code></li>
              <li>Use <code className="bg-gray-200 px-1 rounded">"use client"</code> for interactive components</li>
              <li>Avoid rendering browser-only logic on the server</li>
            </ul>

            {/* FAQ Section */}
            <div className="mt-10">
              <button
                className="bg-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-purple-700 transition duration-300"
                onClick={() => setShowFAQ((prev) => !prev)}
              >
                {showFAQ ? "Hide FAQ ❌" : "Show FAQ ❓"}
              </button>

              {showFAQ && (
                <div className="mt-6 bg-white border border-gray-200 rounded-xl shadow-md p-5 space-y-4 transition-all animate-fade-in">
                  <div>
                    <h3 className="font-bold text-blue-600">
                      Why does hydration matter?
                    </h3>
                    <p className="text-gray-700">
                      Without proper hydration, your app’s interactive features
                      may break or behave unexpectedly.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-600">
                      Is it a server or client problem?
                    </h3>
                    <p className="text-gray-700">
                      Both! The mismatch usually starts on the server but causes
                      issues in the client-rendered React.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Hydration;
