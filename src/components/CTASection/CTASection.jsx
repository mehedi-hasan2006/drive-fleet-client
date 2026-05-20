// components/CTASection.jsx
"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import {
  FaCar,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaCheckCircle,
  FaHeadset,
} from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <FaHeadset className="w-4 h-4 text-green-400" />
              <span className="text-sm text-blue-100">Limited Time Offer</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Ready to Hit the{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Road?
              </span>
            </h2>

            <p className="text-xl text-blue-100/80 leading-relaxed max-w-lg">
              Join thousands of satisfied customers and experience the ultimate car rental service. 
              Book now and get 20% off your first rental!
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4">
              {[
                "No hidden fees",
                "Free cancellation",
                "24/7 support",
                "Best price guarantee",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <FaCheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-blue-100">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/explore-cars">
                <Button className="w-full sm:w-auto px-8 py-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg rounded-xl hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-blue-500/25">
                  <span className="flex items-center gap-2">
                    Browse Cars
                    <FaArrowRight className="w-5 h-5" />
                  </span>
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="w-full sm:w-auto px-8 py-6 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300">
                  <span className="flex items-center gap-2">
                    <FaPhone className="w-5 h-5" />
                    Contact Us
                  </span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Stats & Offer Card */}
          <div className="relative">
            {/* Main Offer Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="text-center text-white mb-6">
                <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-4">
                  <FaCar className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Special Offer</h3>
                <p className="text-blue-200">First-time renter?</p>
              </div>

              <div className="text-center mb-6">
                <div className="text-6xl font-black text-white mb-2">20%</div>
                <div className="text-xl text-blue-200">OFF</div>
                <p className="text-sm text-blue-300 mt-2">On your first booking</p>
              </div>

              <div className="space-y-3">
                {[
                  { label: "Discount Code", value: "FIRST20" },
                  { label: "Valid Until", value: "December 2024" },
                  { label: "Min. Rental", value: "2 Days" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 bg-white/5 rounded-xl"
                  >
                    <span className="text-blue-200">{item.label}</span>
                    <span className="font-semibold text-white">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-white/10">
                <div className="flex items-center gap-3 text-blue-100">
                  <FaEnvelope className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm">
                    Sign up for our newsletter and get exclusive deals straight to your inbox
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}