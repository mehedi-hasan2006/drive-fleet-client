// app/login/page.jsx
"use client";

import { useState } from "react";
import {
  Input,
  Button,
  Checkbox,
  Divider,
  TextField,
  Label,
  FieldError,
  InputGroup,
  toast,
} from "@heroui/react";
import {
  FaGoogle,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaCarSide,
  FaArrowRight,
  FaKey,
} from "react-icons/fa";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const result = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email(
      {
        email: result.email,
        password: result.password,
        callbackURL: "/",
      },
      {
        onSuccess: (res) => {
          // redirect to dashboard or home page
          toast.success("Login Successful!");
        },
        onError: (res) => {
          // display the error message
          toast.danger(res.error.message || "Login Failed. Please try again.");
        },
      },
    );

    const { data: tokenData, error: tokenError } = await authClient.token();
  };

  // Google Sign In Fucntion
  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Car Image/Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 overflow-hidden">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 z-10"></div>

        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200"
          alt="Luxury Car"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />

        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Content */}
        <div className="relative z-20 flex flex-col justify-center px-16 text-white">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center p-4 bg-white/10 backdrop-blur-md rounded-2xl mb-6 ring-1 ring-white/20">
              <FaCarSide className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-6xl font-bold mb-4 leading-tight">
              Drive Your
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Dream Car
              </span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-md">
              Access hundreds of premium vehicles at unbeatable prices. Your
              next adventure starts here.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-4xl font-bold text-blue-300">500+</div>
              <div className="text-sm text-blue-200 mt-1">Premium Cars</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-300">10k+</div>
              <div className="text-sm text-blue-200 mt-1">Happy Riders</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-300">50+</div>
              <div className="text-sm text-blue-200 mt-1">Cities</div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-12 bg-white/10 backdrop-blur-md rounded-2xl p-6 ring-1 ring-white/20">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-blue-100 italic">
              "Best car rental experience ever! The process was smooth and the
              cars are amazing."
            </p>
            <p className="text-white font-semibold mt-2">Sarah Johnson</p>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center px-8 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center my-8">
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-4">
              <FaCarSide className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-xl mb-4">
                <FaKey className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign In</h2>
              <p className="text-gray-500">Access your account to continue</p>
            </div>

            {/* Form */}
            <form className="space-y-5" onSubmit={onSubmit}>
              {/* Email */}
              <TextField
                className="w-full"
                name="email"
                isRequired
                type="email"
                validate={(value) => {
                  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
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
                      aria-label={isVisible ? "Hide password" : "Show password"}
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

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <Checkbox defaultSelected id="default-notifications">
                    <Checkbox.Control>
                      <Checkbox.Indicator />
                    </Checkbox.Control>
                    <Checkbox.Content>
                      <Label htmlFor="default-notifications">Remember me</Label>
                    </Checkbox.Content>
                  </Checkbox>
                </label>
                <Link
                  href="#"
                  className="text-sm font-semibold text-blue-600 hover:text-purple-600 transition-colors"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg h-14 rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
                size="lg"
              >
                <span className="flex items-center justify-center gap-2">
                  Sign In
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
                  Or continue with
                </span>
              </div>
            </div>

            {/* Google Button */}
            <Button
              onClick={handleGoogleSignIn}
              variant="bordered"
              className="w-full border-2 border-gray-200 bg-white hover:bg-gray-50 font-semibold text-gray-700 h-14 rounded-xl transition-all duration-300 hover:border-gray-300 hover:shadow-md group"
              size="lg"
            >
              <span className="flex items-center justify-center gap-3">
                <FaGoogle className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
                Sign in with Google
              </span>
            </Button>

            {/* Register Link */}
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link
                  href="/register"
                  className="font-bold text-blue-600 hover:text-purple-600 transition-colors relative group"
                >
                  Create Account
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
