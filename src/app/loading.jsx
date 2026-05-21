// app/loading.jsx

"use client";

import { FaCar, FaSpinner } from "react-icons/fa";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-gray-100">
        {/* Animated Car Icon */}
        <div className="relative mb-8 flex justify-center">
          {/* Outer ring */}
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 animate-spin-slow flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-200 to-purple-200 animate-spin-reverse flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 shadow-2xl flex items-center justify-center animate-pulse">
                <FaCar className="w-8 h-8 text-white animate-bounce" />
              </div>
            </div>
          </div>

          {/* Floating spinners */}
          <div className="absolute -top-3 -right-3">
            <FaSpinner className="w-6 h-6 text-blue-500 animate-spin" />
          </div>
          <div className="absolute -bottom-3 -left-3">
            <FaSpinner className="w-6 h-6 text-purple-500 animate-spin-reverse" />
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
            Loading...
          </h2>
          <p className="text-gray-500 mb-4">Preparing your experience</p>
          <div className="flex gap-2 justify-center">
            <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></span>
            <span className="w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-100"></span>
            <span className="w-3 h-3 bg-pink-500 rounded-full animate-bounce delay-200"></span>
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 6s linear infinite;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}
