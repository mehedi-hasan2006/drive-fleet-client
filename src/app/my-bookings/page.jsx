import { auth } from "@/lib/auth";
import { fetchBookingsData } from "@/lib/fetchData";
import { headers } from "next/headers";
import { Card, Chip, Separator } from "@heroui/react";
import {
  FaCar,
  FaCalendarAlt,
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaDollarSign,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaHourglassHalf,
  FaArrowRight,
} from "react-icons/fa";
import Link from "next/link";

async function MyBookingsPage() {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const bookingsData = await fetchBookingsData(session?.user?.id, token);

  if (!bookingsData || bookingsData.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-lg">
              <FaCar className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              My Bookings
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Track and manage all your car rentals in one place
            </p>
          </div>

          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center p-6 bg-gray-100 rounded-full mb-6">
              <FaCar className="w-16 h-16 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-700 mb-3">
              No Bookings Yet
            </h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              You haven't made any car bookings yet. Start exploring our
              collection of premium vehicles.
            </p>
            <Link href="/explore-cars">
              <span className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Explore Cars
                <FaArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-lg">
            <FaCar className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            My Bookings
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Track and manage all your car rentals in one place
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <FaCar className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-sm text-gray-500">Total Bookings</span>
            </div>
            <div className="text-3xl font-bold text-gray-800">
              {bookingsData.length}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <FaDollarSign className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-sm text-gray-500">Total Price</span>
            </div>
            <div className="text-3xl font-bold text-green-600">
              {bookingsData
                .reduce((total, booking) => total + (booking.carPrice || 0), 0)
                .toFixed(2)}
            </div>
          </div>
        </div>

        {/* Bookings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookingsData.map((booking) => (
            <Card
              key={booking._id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-0">
                {/* Car Image */}
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <img
                    src={booking.carImage}
                    alt={booking.carTitle}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <Chip
                      className={`${
                        booking.status === "active"
                          ? "bg-green-500 text-white"
                          : booking.status === "pending"
                            ? "bg-yellow-500 text-white"
                            : booking.status === "cancelled"
                              ? "bg-red-500 text-white"
                              : "bg-gray-500 text-white"
                      } backdrop-blur-sm`}
                      size="sm"
                    >
                      {booking.status || "Active"}
                    </Chip>
                  </div>

                  {/* Car Title Overlay */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white font-bold text-xl truncate">
                      {booking.carTitle}
                    </h3>
                  </div>
                </div>

                {/* Booking Details */}
                <div className="p-5">
                  {/* User Info */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <FaUser className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Booked by</p>
                      <p className="font-semibold text-gray-800">
                        {session?.user?.name}
                      </p>
                    </div>
                  </div>

                  <Separator className="my-3" />

                  {/* Booking Info Grid */}
                  <div className="space-y-3">
                    {booking.driverNeed && (
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 bg-purple-100 rounded-lg">
                          <FaUser className="w-3.5 h-3.5 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">
                            Driver (Driver Need?){" "}
                          </p>
                          <p className="text-sm font-medium text-gray-700">
                            {booking.driverNeed === "yes"
                              ? "With Driver (Yes)"
                              : "Self Drive (No)"}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-3">
                      <div className="p-1.5 bg-green-100 rounded-lg">
                        <FaCalendarAlt className="w-3.5 h-3.5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Booking Date</p>
                        <p className="text-sm font-medium text-gray-700">
                          {new Date(booking.bookingAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            },
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-1.5 bg-orange-100 rounded-lg">
                        <FaEnvelope className="w-3.5 h-3.5 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Message</p>
                        <p className="text-sm font-medium text-gray-700 line-clamp-2">
                          {booking.message || "No special notes provided."}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  {/* Footer Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-blue-600">
                      <FaClock className="w-3 h-3" />
                      <span className="text-xs">
                        {new Date(booking.bookingAt).toLocaleTimeString(
                          "en-US",
                          {
                            hour: "2-digit",
                            minute: "2-digit",
                          },
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyBookingsPage;
