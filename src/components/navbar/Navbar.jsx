"use client";
import { useState, useRef, useEffect } from "react";
import { Avatar, Button } from "@heroui/react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import {
  FaHome,
  FaCar,
  FaPlusCircle,
  FaUser,
  FaSignOutAlt,
  FaHistory,
  FaChevronDown,
  FaBars,
  FaTimes,
  FaEnvelope,
  FaList,
} from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const currentPath = usePathname();
  const router = useRouter();
  const dropdownRef = useRef(null);

  // get session
  const session = authClient.useSession();
  const user = session.data?.user;
  const isLoading = session?.isPending;

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // function for logout
  const handleLogout = async () => {
    await authClient.signOut();
    setIsMenuOpen(false);
    setIsProfileOpen(false);
    router.push("/login");
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  const navlinks = (
    <ul className="flex flex-col md:flex-row gap-1 md:gap-2">
      {[
        { href: "/", label: "Home", icon: FaHome },
        { href: "/explore-cars", label: "Explore Cars", icon: FaCar },
        { href: "/add-car", label: "Add Cars", icon: FaPlusCircle },
        { href: "/my-profile", label: "My Profile", icon: FaUser },
        { href: "/my-bookings", label: "My Bookings", icon: FaHistory },
      ].map(({ href, label, icon: Icon }) => (
        <li key={href}>
          <Link
            href={href}
            onClick={closeMobileMenu}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              currentPath === href
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 font-semibold"
                : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
            }`}
          >
            <Icon className="w-4 h-4" />
            <span>{label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm">
      <header className="mx-auto flex h-16 container items-center justify-between px-4 lg:px-6">
        {/* Logo and Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <FaTimes className="w-5 h-5 text-gray-600" />
            ) : (
              <FaBars className="w-5 h-5 text-gray-600" />
            )}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg shadow-blue-500/25 group-hover:shadow-xl group-hover:shadow-blue-500/30 transition-all duration-300">
              <FaCar className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Drive Fleet
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Drive Your Dream</p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2">{navlinks}</div>

        {/* User Section */}
        <div className="flex items-center gap-3">
          {!user && !isLoading && (
            <div className="flex items-center gap-3">
              <Link
                href="/login"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-blue-50"
              >
                <FaUser className="w-4 h-4" />
                Login
              </Link>
              <Link href="/register">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300">
                  <span className="flex items-center gap-2">
                    <FaPlusCircle className="w-4 h-4" />
                    Register
                  </span>
                </Button>
              </Link>
            </div>
          )}

          {user && (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
              >
                <div className="relative">
                  <Avatar className="ring-2 ring-blue-500 ring-offset-2 group-hover:ring-purple-500 transition-all duration-300">
                    <Avatar.Image
                      alt={user?.name || "User"}
                      src={user?.image}
                    />
                    <Avatar.Fallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold">
                      {user?.name?.charAt(0) || "U"}
                    </Avatar.Fallback>
                  </Avatar>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full ring-2 ring-white"></div>
                </div>
                <div className="hidden sm:block text-left">
                  <p className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                    {user?.name}
                  </p>
                  <p className="text-xs text-gray-500">Online</p>
                </div>
                <FaChevronDown
                  className={`hidden sm:block w-3 h-3 text-gray-400 transition-transform duration-300 ${
                    isProfileOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Profile Dropdown */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-3 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in slide-in-from-top-2 duration-200">
                  {/* User Info Header */}
                  <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <div className="flex items-center gap-3">
                      <Avatar className="ring-2 ring-white/50">
                        <Avatar.Image
                          alt={user?.name || "User"}
                          src={user?.image}
                        />
                        <Avatar.Fallback className="bg-white/20 text-white font-bold">
                          {user?.name?.charAt(0) || "U"}
                        </Avatar.Fallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-white">{user?.name}</p>
                        <p className="text-sm text-blue-100 flex items-center gap-1">
                          <FaEnvelope className="w-3 h-3" />
                          {user?.email}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="p-2">
                    <Link
                      href="/my-profile"
                      onClick={() => setIsProfileOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-xl transition-all group"
                    >
                      <FaUser className="w-4 h-4 text-blue-500" />
                      <span className="flex-1">My Profile</span>
                      <span className="text-xs text-gray-400">→</span>
                    </Link>

                    <Link
                      href="/my-bookings"
                      onClick={() => setIsProfileOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-purple-50 rounded-xl transition-all group"
                    >
                      <FaHistory className="w-4 h-4 text-purple-500" />
                      <span className="flex-1">My Bookings</span>
                      <span className="text-xs text-gray-400">→</span>
                    </Link>

                    <Link
                      href="/add-car"
                      onClick={() => setIsProfileOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-pink-50 rounded-xl transition-all group"
                    >
                      <FaPlusCircle className="w-4 h-4 text-pink-500" />
                      <span className="flex-1">Add Car</span>
                      <span className="text-xs text-gray-400">→</span>
                    </Link>

                    <Link
                      href="/my-added-cars"
                      onClick={() => setIsProfileOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-all group"
                    >
                      <FaList className="w-4 h-4 text-gray-500" />
                      <span className="flex-1">My Added Cars</span>
                      <span className="text-xs text-gray-400">→</span>
                    </Link>

                    <div className="border-t border-gray-100 my-1"></div>

                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-all w-full group"
                    >
                      <FaSignOutAlt className="w-4 h-4" />
                      <span className="flex-1 font-medium">Logout</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white shadow-lg">
          <div className="p-4 space-y-2">
            {/* Mobile Navigation Links */}
            <div className="space-y-1 mb-4">{navlinks}</div>

            {/* Mobile User Section */}
            {!user && !isLoading && (
              <div className="pt-4 border-t border-gray-100 space-y-2">
                <Link
                  href="/login"
                  onClick={closeMobileMenu}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-xl transition-all w-full"
                >
                  <FaUser className="w-4 h-4 text-blue-500" />
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all w-full"
                >
                  <FaPlusCircle className="w-4 h-4" />
                  Register
                </Link>
              </div>
            )}

            {user && (
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl">
                  <Avatar className="ring-2 ring-blue-500">
                    <Avatar.Image
                      alt={user?.name || "User"}
                      src={user?.image}
                      referrerPolicy="no-referrer"
                    />
                    <Avatar.Fallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold">
                      {user?.name?.charAt(0) || "U"}
                    </Avatar.Fallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-700">{user?.name}</p>
                    <p className="text-sm text-gray-500">{user?.email}</p>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-all w-full mt-2"
                >
                  <FaSignOutAlt className="w-4 h-4" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
