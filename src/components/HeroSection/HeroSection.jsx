// components/HeroSection.jsx
"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import {
  FaCar,
  FaSearch,
  FaArrowRight,
  FaStar,
  FaShieldAlt,
  FaHeadset,
  FaDollarSign,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUser,
} from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      {/* Floating Cars */}
      <div className="absolute top-32 left-10 animate-float opacity-20">
        <FaCar className="w-16 h-16 text-white" />
      </div>
      <div className="absolute bottom-32 right-10 animate-float-delayed opacity-20">
        <FaCar className="w-16 h-16 text-white" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-blue-100 font-medium">
                Trusted by 10,000+ customers worldwide
              </span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                Find Your
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Perfect Ride
                </span>
              </h1>
              <p className="text-xl text-blue-100/80 mt-6 leading-relaxed max-w-xl">
                Discover an unparalleled selection of premium vehicles at unbeatable prices. 
                Your journey begins with the perfect car.
              </p>
            </div>

            {/* Search Box */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-2xl">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-300" />
                  <input
                    type="text"
                    placeholder="Pickup Location"
                    className="w-full pl-12 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 focus:bg-white/30 transition-all"
                  />
                </div>
                <div className="flex-1 relative">
                  <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-300" />
                  <input
                    type="date"
                    className="w-full pl-12 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 focus:bg-white/30 transition-all"
                  />
                </div>
                <Link href="/explore-cars">
                  <Button className="w-full sm:w-auto px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-500/25 hover:shadow-2xl">
                    <span className="flex items-center gap-2">
                      <FaSearch className="w-5 h-5" />
                      Search
                    </span>
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  500+
                </div>
                <div className="text-sm text-blue-200">Premium Cars</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  10k+
                </div>
                <div className="text-sm text-blue-200">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  50+
                </div>
                <div className="text-sm text-blue-200">Cities</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/explore-cars">
                <Button className="w-full sm:w-auto px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-500/25 hover:shadow-2xl">
                  <span className="flex items-center gap-2">
                    Explore Cars
                    <FaArrowRight className="w-5 h-5" />
                  </span>
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button className="w-full sm:w-auto px-8 py-6 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300">
                  How It Works
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Featured Car Card */}
          <div className="hidden lg:block relative">
            <div className="relative">
              {/* Main Car Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 group">
                <img
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800"
                  alt="Luxury Car"
                  className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Car Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-blue-500/80 backdrop-blur-sm rounded-full text-sm font-semibold">
                      PREMIUM
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                      ))}
                      <span className="text-sm ml-1">4.9</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">Mercedes-Benz S-Class</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-200">Luxury Sedan</span>
                    <div className="text-right">
                      <div className="text-3xl font-bold">$120</div>
                      <div className="text-sm text-blue-200">per day</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Small Cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-xl">
                    <FaShieldAlt className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-800">Fully Insured</div>
                    <div className="text-xs text-gray-500">Peace of mind</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-xl">
                    <FaHeadset className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-800">24/7 Support</div>
                    <div className="text-xs text-gray-500">Always here</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-8 bg-white rounded-2xl shadow-xl p-3 animate-float">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-blue-100 rounded-xl">
                    <FaDollarSign className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Best Price</div>
                    <div className="text-sm font-bold text-green-600">Guaranteed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f8fafc"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 3s ease-in-out 1.5s infinite;
        }
      `}</style>
    </div>
  );
}