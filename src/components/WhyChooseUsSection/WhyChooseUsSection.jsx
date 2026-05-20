// components/WhyChooseUsSection.jsx
"use client";

import {
  FaShieldAlt,
  FaHeadset,
  FaDollarSign,
  FaCar,
  FaClock,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaStar,
  FaThumbsUp,
} from "react-icons/fa";

export default function WhyChooseUsSection() {
  const features = [
    {
      icon: FaShieldAlt,
      title: "Fully Insured",
      description: "Every rental comes with comprehensive insurance coverage for your complete peace of mind on the road.",
      color: "bg-blue-50",
      iconColor: "text-blue-600",
      gradient: "from-blue-500 to-blue-600",
      stats: "100% Coverage",
    },
    {
      icon: FaDollarSign,
      title: "Best Price Guarantee",
      description: "Found a lower price elsewhere? We'll match it and give you an additional 10% off. Best rates guaranteed.",
      color: "bg-green-50",
      iconColor: "text-green-600",
      gradient: "from-green-500 to-green-600",
      stats: "Save up to 30%",
    },
    {
      icon: FaHeadset,
      title: "24/7 Customer Support",
      description: "Our dedicated support team is available round the clock to assist you with any questions or concerns.",
      color: "bg-purple-50",
      iconColor: "text-purple-600",
      gradient: "from-purple-500 to-purple-600",
      stats: "< 5 min Response",
    },
    {
      icon: FaCar,
      title: "Premium Fleet",
      description: "Choose from over 500 meticulously maintained vehicles, from economy to luxury and everything in between.",
      color: "bg-orange-50",
      iconColor: "text-orange-600",
      gradient: "from-orange-500 to-orange-600",
      stats: "500+ Vehicles",
    },
    {
      icon: FaClock,
      title: "Flexible Rentals",
      description: "Rent by the day, week, or month. Free cancellation up to 24 hours before your pickup time.",
      color: "bg-pink-50",
      iconColor: "text-pink-600",
      gradient: "from-pink-500 to-pink-600",
      stats: "Free Cancellation",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Multiple Locations",
      description: "Convenient pickup and drop-off locations across 50+ cities. We're wherever you need us to be.",
      color: "bg-teal-50",
      iconColor: "text-teal-600",
      gradient: "from-teal-500 to-teal-600",
      stats: "50+ Cities",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,theme(colors.blue.600)_1px,transparent_0)] bg-[size:32px_32px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-4">
            <FaThumbsUp className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-green-600">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why We're the{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Best Choice
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We go above and beyond to ensure your car rental experience is nothing short of exceptional.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-2xl hover:border-transparent transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {feature.description}
              </p>

              {/* Stats Badge */}
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r ${feature.gradient} text-white rounded-full text-xs font-semibold`}>
                <FaCheckCircle className="w-3 h-3" />
                {feature.stats}
              </div>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Bar */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Premium Cars</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10k+</div>
              <div className="text-blue-200">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Cities</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9</div>
              <div className="text-blue-200">
                <div className="flex gap-1 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}