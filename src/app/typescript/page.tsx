"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TypescriptVsJavascript: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow container mx-auto p-6">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-indigo-700 animate-bounce">JavaScript vs TypeScript: Key Differences</h1>
        <div className="overflow-x-auto shadow-2xl rounded-lg border-2 border-indigo-300">
          <table className="table-auto w-full border-collapse bg-white rounded-lg text-sm sm:text-base">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="border border-gray-300 px-6 py-3 text-left">JavaScript</th>
                <th className="border border-gray-300 px-6 py-3 text-left">TypeScript</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="hover:bg-indigo-50">
                <td className="border border-gray-300 px-6 py-4">Dynamically typed: Types are determined when the code runs.</td>
                <td className="border border-gray-300 px-6 py-4">Statically typed: Types are checked before the code runs, during the compile-time.</td>
              </tr>
              <tr className="hover:bg-indigo-50">
                <td className="border border-gray-300 px-6 py-4">No type checking, which can lead to errors only discovered when the code is running.</td>
                <td className="border border-gray-300 px-6 py-4">Type checking is done in advance, preventing many errors before running the code.</td>
              </tr>
              <tr className="hover:bg-indigo-50">
                <td className="border border-gray-300 px-6 py-4">Limited support for modern development tools.</td>
                <td className="border border-gray-300 px-6 py-4">Provides better integration with modern tools, such as autocomplete and real-time error detection, in editors like VSCode.</td>
              </tr>
              <tr className="hover:bg-indigo-50">
                <td className="border border-gray-300 px-6 py-4">No interfaces or type aliases.</td>
                <td className="border border-gray-300 px-6 py-4">Supports interfaces (defines the structure or shape of an object, e.g., an object must have 'name' and 'age' properties) and type aliases (gives a custom name to a type, e.g., 'UserType' can represent an object with specific properties).</td>
              </tr>
              <tr className="hover:bg-indigo-50">
                <td className="border border-gray-300 px-6 py-4">No abstract classes.</td>
                <td className="border border-gray-300 px-6 py-4">Supports abstract classes (provides a blueprint for other classes and prevents direct instantiation; ensures child classes implement specific methods).</td>
              </tr>
              <tr className="hover:bg-indigo-50">
                <td className="border border-gray-300 px-6 py-4">Basic object-oriented programming support.</td>
                <td className="border border-gray-300 px-6 py-4">Enhanced object-oriented programming (OOP) features, such as access modifiers (control who can use a class property or method: 'public' means accessible to all, 'private' means accessible only within the class, and 'protected' means accessible within the class and its subclasses), abstract classes, and interfaces.</td>
              </tr>
              <tr className="hover:bg-indigo-50">
                <td className="border border-gray-300 px-6 py-4">Refactoring can be risky because there's no automatic type checking to catch errors.</td>
                <td className="border border-gray-300 px-6 py-4">Safer refactoring is possible due to static typing, which helps identify type-related issues during code changes.</td>
              </tr>
              <tr className="hover:bg-indigo-50">
                <td className="border border-gray-300 px-6 py-4">Errors usually show up only when the code is running, which can lead to unexpected problems.</td>
                <td className="border border-gray-300 px-6 py-4">Errors are detected earlier (during compilation), preventing issues before running the code.</td>
              </tr>
              <tr className="hover:bg-indigo-50">
                <td className="border border-gray-300 px-6 py-4">Example:<br/>let name = 'John'; name = 123; (No error until runtime)</td>
                <td className="border border-gray-300 px-6 py-4">Example:<br/>let name: string = 'John'; name = 123; (Compilation error: Type 'number' is not assignable to type 'string')</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TypescriptVsJavascript;
