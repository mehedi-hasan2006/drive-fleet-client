// components/TestimonialsSection.jsx
"use client";

import { Card, Avatar } from "@heroui/react";
import {
  FaStar,
  FaQuoteLeft,
  FaQuoteRight,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Business Traveler",
      avatar: "https://i.ibb.co.com/rfz05Pyg/IMG-20250715-221007.jpg",
      rating: 5,
      text: "The best car rental experience I've ever had! The Tesla Model S was in pristine condition, and the booking process was incredibly smooth. Will definitely use CarRent again for my future trips.",
      car: "Tesla Model S",
      date: "2 weeks ago",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Tourist",
      avatar: "https://i.pravatar.cc/150?img=2",
      rating: 5,
      text: "Outstanding service from start to finish. The BMW I rented was absolutely stunning, and the 24/7 support team was there whenever I needed assistance. Highly recommended!",
      car: "BMW M4 Competition",
      date: "1 month ago",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Family Vacationer",
      avatar: "https://i.pravatar.cc/150?img=3",
      rating: 4,
      text: "Perfect for our family trip! The Range Rover was spacious and comfortable for all 7 of us. The pickup was quick, and the car was spotless. Great value for money.",
      car: "Range Rover Sport",
      date: "3 weeks ago",
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Weekend Adventurer",
      avatar: "https://i.pravatar.cc/150?img=4",
      rating: 5,
      text: "Rented the Porsche 911 for a weekend getaway and it was an absolute dream. The car was delivered to my hotel on time, and the whole experience was seamless.",
      car: "Porsche 911 Turbo",
      date: "5 days ago",
    },
    {
      id: 5,
      name: "Lisa Anderson",
      role: "Corporate Executive",
      avatar: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      text: "As someone who rents cars frequently for business, CarRent stands out for their professionalism and quality. The Mercedes S-Class exceeded all my expectations.",
      car: "Mercedes S-Class",
      date: "1 week ago",
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Tech Enthusiast",
      avatar: "https://i.pravatar.cc/150?img=6",
      rating: 4,
      text: "The Audi e-tron GT was an incredible experience. Silent, powerful, and packed with technology. The charging stations information provided was very helpful.",
      car: "Audi e-tron GT",
      date: "2 weeks ago",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4">
            <FaStar className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-semibold text-blue-600">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <FaQuoteLeft className="w-8 h-8 text-blue-200" />
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? "text-yellow-400"
                          : "text-gray-200"
                      }`}
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-4">
                  {testimonial.text}
                </p>

                {/* Car Rented */}
                <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1">Car Rented</p>
                  <p className="font-semibold text-gray-700 text-sm">
                    {testimonial.car}
                  </p>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-3">
                    <Avatar
                      src={testimonial.avatar}
                      className="ring-2 ring-blue-100"
                      size="md"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-gray-500">{testimonial.role}</p>
                    </div>
                    <span className="text-xs text-gray-400">{testimonial.date}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "4.9", label: "Average Rating", icon: FaStar, color: "text-yellow-500" },
            { value: "10k+", label: "Happy Customers", icon: FaQuoteRight, color: "text-blue-500" },
            { value: "500+", label: "Reviews", icon: FaStar, color: "text-purple-500" },
            { value: "98%", label: "Satisfaction Rate", icon: FaQuoteRight, color: "text-green-500" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex items-center justify-center p-3 bg-gray-50 rounded-xl mb-3">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}