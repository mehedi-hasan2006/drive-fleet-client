import Link from "next/link";
import {
  FaCar,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaHeart,
  FaShieldAlt,
  FaHeadset,
  FaClock,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-violet-900 via-blue-900 to-purple-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <FaCar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Drive Fleet
                </h2>
                <p className="text-xs text-blue-200 -mt-1">Drive Your Dream</p>
              </div>
            </Link>

            <p className="text-gray-300 leading-relaxed text-sm">
              Your premier destination for car rentals. Choose from hundreds of
              vehicles and hit the road with confidence. Quality cars,
              unbeatable prices, exceptional service.
            </p>

            {/* Trust Badges */}
            <div className="flex gap-2">
              <div className="flex items-center gap-1 px-3 py-1.5 bg-white/10 rounded-lg text-xs">
                <FaShieldAlt className="w-3 h-3 text-green-400" />
                <span>Secure</span>
              </div>
              <div className="flex items-center gap-1 px-3 py-1.5 bg-white/10 rounded-lg text-xs">
                <FaHeadset className="w-3 h-3 text-blue-400" />
                <span>24/7 Support</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: FaFacebook, href: "#", color: "hover:bg-blue-600" },
                { icon: FaTwitter, href: "#", color: "hover:bg-sky-500" },
                { icon: FaInstagram, href: "#", color: "hover:bg-pink-600" },
                { icon: FaLinkedin, href: "#", color: "hover:bg-blue-700" },
                { icon: FaYoutube, href: "#", color: "hover:bg-red-600" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`p-2.5 bg-white/10 rounded-xl hover:scale-110 transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "#" },
                { label: "Explore Cars", href: "/explore-cars" },
                { label: "Register", href: "/register" },
                { label: "Add Car", href: "/add-car" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Blog", href: "#blog" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 group text-sm"
                  >
                    <FaArrowRight className="w-3 h-3 text-blue-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Daily Rentals", icon: FaCar },
                { label: "Long Term Leasing", icon: FaClock },
                { label: "Airport Transfer", icon: FaMapMarkerAlt },
                { label: "Corporate Services", icon: FaShieldAlt },
                { label: "Chauffeur Drive", icon: FaHeadset },
                { label: "Roadside Assistance", icon: FaPhone },
              ].map((service) => (
                <li key={service.label}>
                  <Link
                    href="#"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 group text-sm"
                  >
                    <div className="p-1.5 bg-white/10 rounded-lg group-hover:bg-blue-500/20 transition-all duration-300">
                      <service.icon className="w-3.5 h-3.5 text-blue-400" />
                    </div>
                    <span>{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg flex-shrink-0">
                    <FaMapMarkerAlt className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">
                      123 Car Street, Auto City
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </li>
                <li>
                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                  >
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <FaPhone className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Call Us</p>
                      <p className="text-sm font-semibold group-hover:text-blue-400 transition-colors">
                        +1 (234) 567-890
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@carrent.com"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                  >
                    <div className="p-2 bg-pink-500/20 rounded-lg">
                      <FaEnvelope className="w-4 h-4 text-pink-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Email Us</p>
                      <p className="text-sm font-semibold group-hover:text-blue-400 transition-colors">
                        info@carrent.com
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                Newsletter
              </h3>
              <p className="text-sm text-gray-300 mb-3">
                Subscribe for exclusive deals and updates
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button className="px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <FaArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-gray-400 flex items-center gap-1">
              &copy; {currentYear} CarRent. All rights reserved. Made with
              <FaHeart className="w-3 h-3 text-red-500 animate-pulse" />
              by Drive Fleet Team
            </p>

            {/* Bottom Links */}
            <div className="flex items-center gap-4 text-sm">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <span className="text-gray-600">|</span>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
