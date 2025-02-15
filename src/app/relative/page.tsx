"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PositioningGuide: React.FC = () => {
  return (
    <>
    <Navbar />
      <div className="bg-blue-50 min-h-screen flex flex-col">
        <main className="mt-20 mb-20 flex-1 p-6 md:p-12 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Understanding <span className="text-blue-600">relative</span> vs{" "}
            <span className="text-green-600">absolute</span> Positioning in
            Tailwind CSS
          </h1>
          <p className="text-gray-700 mb-4">
            Tailwind CSS has two common ways to position elements:{" "}
            <code className="bg-gray-100 px-1 rounded">relative</code> and{" "}
            <code className="bg-gray-100 px-1 rounded">absolute</code>. Knowing
            when to use each one will help you position elements where you want
            them on the page.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-4">
            What is <span className="text-blue-600">relative</span> positioning?
          </h2>
          <p className="text-gray-700 mb-4">
            <code className="bg-gray-100 px-1 rounded">relative</code>{" "}
            positioning means the element stays in its normal spot, but you can
            move it a little using <code>top</code>, <code>right</code>,{" "}
            <code>bottom</code>, or <code>left</code>. You may want to move it
            slightly to adjust spacing, alignment, or to create a subtle visual
            effect. It still takes up space like normal.
          </p>

          <div className="relative bg-blue-100 p-4 rounded mb-4">
            This box is <strong>relative</strong>. It moves slightly with{" "}
            <code>top-2</code> and <code>left-2</code>.
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-4">
            What is <span className="text-green-600">absolute</span> positioning?
          </h2>
          <p className="text-gray-700 mb-4">
            <code className="bg-gray-100 px-1 rounded">absolute</code>{" "}
            positioning means the element is removed from the normal flow of the
            page. It doesn't take up space like normal. Instead, it is placed
            exactly where you tell it, inside the nearest{" "}
            <code className="bg-gray-100 px-1 rounded">relative</code> parent.
          </p>

          <div className="relative bg-green-100 p-4 rounded mb-4">
            This box is <strong>relative</strong>.
            <div className="absolute bg-green-300 top-0 right-0 p-2 rounded">
              I am <strong>absolute</strong> inside!
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-4">
            When to Use Them
          </h2>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>
              <strong>
                Use <span className="text-blue-600">relative</span>
              </strong>{" "}
              when you need to nudge an element a little without removing it
              from the flow.
            </li>
            <li>
              <strong>
                Use <span className="text-green-600">absolute</span>
              </strong>{" "}
              when you need to place an element on top of or inside another
              element, like adding a label on an image or positioning an icon
              inside a button.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-4">
            Key Example Recap
          </h2>
          <p className="text-gray-700 mb-4">
            You often use{" "}
            <code className="bg-gray-100 px-1 rounded">relative</code> on the
            parent and <code className="bg-gray-100 px-1 rounded">absolute</code>{" "}
            on the child to position something inside the parent.
          </p>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PositioningGuide;
