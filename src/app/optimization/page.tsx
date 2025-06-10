"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WebOptimizationPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-purple-100 flex flex-col items-center justify-start px-6 py-16 sm:py-24">

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-black mb-8 text-center tracking-wide">
          Web Optimization
        </h1>

        {/* Definition Section */}
        <div className="w-fit max-w-6xl px-8 py-12 sm:px-16 sm:py-16 rounded-xl shadow-xl bg-white mb-12">
          <h2 className="text-3xl font-bold text-indigo-600 mb-4 text-center">
            What is Web Optimization?
          </h2>
          <p className="text-lg text-gray-700 text-center">
            Web optimization means making a website load faster, run smoother, and rank higher by improving performance, code, and content delivery.
          </p>
        </div>

        {/* Techniques Section */}
        <div className="w-fit max-w-7xl px-8 py-12 sm:px-16 sm:py-16 rounded-xl shadow-xl bg-white mb-12">
          <h2 className="text-3xl font-bold text-indigo-600 mb-4 text-center">
            Web Optimization Checklist
          </h2>
          <ul className="text-lg text-gray-700 space-y-4">
            <li>✅ SSR (Server-Side Rendering) – Render pages on the server so users see content faster.</li>
            <li>✅ CDN (Content Delivery Network) – Deliver site files from the closest server to the user.</li>
            <li>✅ Compressed Images – Reduce image file size to improve page speed.</li>
            <li>✅ Lazy Loading – Only load images or content when users scroll to them.</li>
            <li>✅ Minify Code (HTML, CSS, JS) – Remove spaces and comments to shrink file sizes.</li>
            <li>✅ Use Fewer Fonts or Host Them Yourself – Reduce font loading time and avoid external delays.</li>
            <li>✅ Use Browser Caching – Store site files in the browser so repeat visits are faster.</li>
            <li>✅ Limit Third-Party Scripts – Too many external scripts slow down your site.</li>
            <li>✅ Use a Fast Hosting Provider – A good server ensures faster load times and uptime.</li>
            <li>✅ Use Modern JavaScript Frameworks Wisely – Don’t overload users with unnecessary JS.</li>
            <li>✅ Enable GZIP Compression – Compress files before sending them to the browser.</li>
            <li>✅ Optimize CSS and JS Delivery – Load critical code first and defer the rest.</li>
            <li>✅ Avoid Redirect Chains – Too many redirects delay page load.</li>
            <li>✅ Use Responsive Design – Make your site fast and accessible on all screen sizes.</li>
            <li>✅ Preload Key Resources – Tell the browser to load important files early.</li>
            <li>✅ Reduce HTTP Requests – Combine files and limit how many resources load on a page.</li>
            <li>✅ Audit Performance Regularly – Use tools like Lighthouse or PageSpeed Insights to catch issues.</li>
          </ul>
        </div>

        {/* Summary Section */}
        <div className="w-fit max-w-6xl px-8 py-12 sm:px-16 sm:py-16 rounded-xl shadow-xl bg-white mb-12">
          <h2 className="text-3xl font-bold text-indigo-600 mb-4 text-center">
            Why It Matters
          </h2>
          <p className="text-lg text-gray-700 text-left">
            Optimizing your website leads to a better user experience, faster load times, improved SEO rankings, and higher conversion rates. Implementing even a few of these techniques can make a significant difference in your site's performance and accessibility.
          </p>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default WebOptimizationPage;
