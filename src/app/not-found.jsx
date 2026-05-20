// app/not-found.jsx
"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import {
  FaHome,
  FaCar,
  FaSearch,
  FaArrowLeft,
  FaExclamationTriangle,
  FaMapSigns,
} from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 animate-bounce-slow">
        <FaCar className="w-12 h-12 text-blue-300/40" />
      </div>
      <div className="absolute bottom-20 right-20 animate-bounce-slow delay-500">
        <FaCar className="w-12 h-12 text-purple-300/40" />
      </div>
      <div className="absolute top-40 right-40 animate-pulse">
        <FaMapSigns className="w-8 h-8 text-gray-300/40" />
      </div>
      <div className="absolute bottom-40 left-40 animate-pulse delay-700">
        <FaExclamationTriangle className="w-8 h-8 text-yellow-300/40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        

        {/* Error Code */}
        <div className="mb-6">
          <h1 className="text-7xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-none mb-4">
            404
          </h1>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-300"></div>
            <span className="text-lg font-semibold text-gray-500 uppercase tracking-widest">
              Page Not Found
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-300"></div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Oops! This Road Doesn&apos;t Exist
          </h2>
          <p className="text-md text-gray-600 max-w-md mx-auto leading-relaxed">
            The page you&apos;re looking for seems to have driven off into the
            sunset. It might have been moved, deleted, or never existed in the
            first place.
          </p>
        </div>

        {/* Suggestions */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 p-6 mb-8">
          <h3 className="font-semibold text-gray-700 mb-4 flex items-center justify-center gap-2">
            <FaMapSigns className="w-5 h-5 text-blue-500" />
            Here are some helpful links:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/"
              className="flex items-center gap-3 px-4 py-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-all group"
            >
              <div className="p-2 bg-blue-500 rounded-lg">
                <FaHome className="w-4 h-4 text-white" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                  Home Page
                </p>
                <p className="text-xs text-gray-500">Start from beginning</p>
              </div>
            </Link>
            <Link
              href="/explore-cars"
              className="flex items-center gap-3 px-4 py-3 bg-purple-50 rounded-xl hover:bg-purple-100 transition-all group"
            >
              <div className="p-2 bg-purple-500 rounded-lg">
                <FaCar className="w-4 h-4 text-white" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-700 group-hover:text-purple-600 transition-colors">
                  Explore Cars
                </p>
                <p className="text-xs text-gray-500">Browse our fleet</p>
              </div>
            </Link>
            <Link
              href="/add-car"
              className="flex items-center gap-3 px-4 py-3 bg-green-50 rounded-xl hover:bg-green-100 transition-all group"
            >
              <div className="p-2 bg-green-500 rounded-lg">
                <FaSearch className="w-4 h-4 text-white" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-700 group-hover:text-green-600 transition-colors">
                  Add Car
                </p>
                <p className="text-xs text-gray-500">List your vehicle</p>
              </div>
            </Link>
            <Link
              href="/login"
              className="flex items-center gap-3 px-4 py-3 bg-orange-50 rounded-xl hover:bg-orange-100 transition-all group"
            >
              <div className="p-2 bg-orange-500 rounded-lg">
                <FaArrowLeft className="w-4 h-4 text-white" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-700 group-hover:text-orange-600 transition-colors">
                  Login
                </p>
                <p className="text-xs text-gray-500">View your account</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link href="/">
            <Button
              className="w-full sm:w-auto px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-500/25 hover:shadow-2xl"
              size="lg"
              startContent={<FaHome className="w-5 h-5" />}
            >
              Back to Home
            </Button>
          </Link>
          <Button
            onClick={() => window.history.back()}
            variant="bordered"
            className="w-full sm:w-auto px-8 py-6 border-2 border-gray-300 font-bold text-lg rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
            size="lg"
            startContent={<FaArrowLeft className="w-5 h-5" />}
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
