// app/register/page.jsx
"use client";

import { useState } from "react";
import { Button, Checkbox, TextField, Label, InputGroup } from "@heroui/react";
import {
  FaGoogle,
  FaEnvelope,
  FaUser,
  FaEye,
  FaEyeSlash,
  FaCarSide,
  FaArrowRight,
  FaUserPlus,
  FaCheckCircle,
  FaKey,
} from "react-icons/fa";
import Link from "next/link";

export default function RegisterPage() {
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Form Data:", data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Top Navigation */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
              <FaCarSide className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CarRent
            </span>
          </Link>
          <Link
            href="/login"
            className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors"
          >
            Already have an account?{" "}
            <span className="text-blue-600">Sign In</span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Benefits */}
          <div className="hidden lg:block">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6">
                  <FaUserPlus className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  Start Your
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Journey Today
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Join thousands of satisfied customers who trust us for their
                  car rental needs.
                </p>
              </div>

              {/* Benefits Cards */}
              <div className="grid gap-6">
                {[
                  {
                    icon: FaCheckCircle,
                    color: "bg-green-50 text-green-600",
                    title: "Instant Booking",
                    description:
                      "Book your car in seconds with our streamlined process",
                  },
                  {
                    icon: FaCheckCircle,
                    color: "bg-blue-50 text-blue-600",
                    title: "Best Prices",
                    description: "Get the most competitive rates guaranteed",
                  },
                  {
                    icon: FaCheckCircle,
                    color: "bg-purple-50 text-purple-600",
                    title: "24/7 Support",
                    description: "Round-the-clock assistance whenever you need",
                  },
                  {
                    icon: FaCheckCircle,
                    color: "bg-orange-50 text-orange-600",
                    title: "Flexible Cancellation",
                    description:
                      "Free cancellation up to 24 hours before pickup",
                  },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100"
                  >
                    <div className={`p-2 ${benefit.color} rounded-xl`}>
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-blue-200 text-sm mt-1">Cars</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">10k+</div>
                    <div className="text-blue-200 text-sm mt-1">Users</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">4.9</div>
                    <div className="text-blue-200 text-sm mt-1">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Registration Form */}
          <div className="max-w-md mx-auto lg:max-w-none">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              {/* Mobile Header */}
              <div className="lg:hidden text-center mb-8">
                <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-4">
                  <FaUserPlus className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Create Account
                </h2>
              </div>

              {/* Desktop Header */}
              <div className="hidden lg:block mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Create Your Account
                </h2>
                <p className="text-gray-500">
                  Fill in the details below to get started
                </p>
              </div>

              {/* Form */}
              <form className="space-y-5" onSubmit={onSubmit}>
                {/* Full Name */}
                <TextField
                  className="w-full"
                  name="name"
                  isRequired
                  type="text"
                  validate={(value) => {
                    if (value.length < 2) {
                      return "Name must be at least 2 characters";
                    }
                    return null;
                  }}
                >
                  <Label>Full Name</Label>
                  <InputGroup>
                    <InputGroup.Prefix>
                      <FaUser className="size-4 text-muted" />
                    </InputGroup.Prefix>
                    <InputGroup.Input
                      className="w-full"
                      placeholder="John Doe"
                    />
                  </InputGroup>
                </TextField>

                {/* Email */}
                <TextField
                  className="w-full"
                  name="email"
                  isRequired
                  type="email"
                  validate={(value) => {
                    if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                    ) {
                      return "Please enter a valid email address";
                    }
                    return null;
                  }}
                >
                  <Label>Email address</Label>
                  <InputGroup>
                    <InputGroup.Prefix>
                      <FaEnvelope className="size-4 text-muted" />
                    </InputGroup.Prefix>
                    <InputGroup.Input
                      className="w-full max-w-[300px]"
                      placeholder="name@email.com"
                    />
                  </InputGroup>
                </TextField>

                {/* Image URL */}
                <TextField
                  className="w-full"
                  name="image"
                  isRequired
                  type="text"
                >
                  <Label> Profile Image URL</Label>
                  <InputGroup>
                    <InputGroup.Prefix>
                      <FaUser className="size-4 text-muted" />
                    </InputGroup.Prefix>
                    <InputGroup.Input
                      className="w-full"
                      placeholder="https://example.com/photo.jpg"
                    />
                  </InputGroup>
                </TextField>

                {/* Password */}
                <TextField
                  className="w-full "
                  name="password"
                  type="password"
                  minLength={8}
                  isRequired
                  validate={(value) => {
                    if (value.length < 8) {
                      return "Password must be at least 8 characters";
                    }
                    if (!/[A-Z]/.test(value)) {
                      return "Password must contain at least one uppercase letter";
                    }
                    if (!/[0-9]/.test(value)) {
                      return "Password must contain at least one number";
                    }
                    return null;
                  }}
                >
                  <Label>Password</Label>
                  <InputGroup>
                    <InputGroup.Prefix>
                      <FaKey className="size-4 text-muted" />
                    </InputGroup.Prefix>
                    <InputGroup.Input
                      className="w-full"
                      type={isVisible ? "text" : "password"}
                      placeholder="Enter Password"
                    />

                    <InputGroup.Suffix className="pr-0">
                      <Button
                        isIconOnly
                        aria-label={
                          isVisible ? "Hide password" : "Show password"
                        }
                        size="sm"
                        variant="ghost"
                        onPress={() => setIsVisible(!isVisible)}
                      >
                        {isVisible ? (
                          <FaEye className="size-4" />
                        ) : (
                          <FaEyeSlash className="size-4" />
                        )}
                      </Button>
                    </InputGroup.Suffix>
                  </InputGroup>
                </TextField>

                {/* Terms */}
                <label className="flex items-start gap-3 cursor-pointer group bg-gray-50 rounded-xl p-4">
                  <Checkbox defaultSelected id="default-notifications">
                    <Checkbox.Control>
                      <Checkbox.Indicator />
                    </Checkbox.Control>
                    <Checkbox.Content>
                      <Label htmlFor="default-notifications">
                        <span className="text-sm text-gray-600">
                          I agree to the{" "}
                          <a
                            href="#"
                            className="font-semibold text-blue-600 hover:text-purple-600 transition-colors"
                          >
                            Terms of Service
                          </a>{" "}
                          and{" "}
                          <a
                            href="#"
                            className="font-semibold text-blue-600 hover:text-purple-600 transition-colors"
                          >
                            Privacy Policy
                          </a>
                        </span>
                      </Label>
                    </Checkbox.Content>
                  </Checkbox>
                </label>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg h-14 rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
                  size="lg"
                >
                  <span className="flex items-center justify-center gap-2">
                    Create Account
                    <FaArrowRight className="w-4 h-4" />
                  </span>
                </Button>
              </form>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t-2 border-gray-100"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-4 bg-white text-sm font-medium text-gray-500">
                    Or sign up with
                  </span>
                </div>
              </div>

              {/* Google Button */}
              <Button
                variant="bordered"
                className="w-full border-2 border-gray-200 bg-white hover:bg-gray-50 font-semibold text-gray-700 h-14 rounded-xl transition-all duration-300 hover:border-gray-300 hover:shadow-md group"
                size="lg"
              >
                <span className="flex items-center justify-center gap-3">
                  <FaGoogle className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
                  Sign up with Google
                </span>
              </Button>

              {/* Login Link */}
              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-bold text-blue-600 hover:text-purple-600 transition-colors relative group"
                  >
                    Sign In
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
