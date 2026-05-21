// app/cars/[id]/page.jsx or components/SingleCarDetailsPage.jsx
import { fetchSingleCar } from "@/lib/fetchData";
import { Button, Chip } from "@heroui/react";
import {
  FaCar,
  FaDollarSign,
  FaUserFriends,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaGasPump,
  FaCogs,
  FaStar,
  FaCheckCircle,
  FaTimesCircle,
  FaTools,
  FaArrowLeft,
  FaShareAlt,
  FaHeart,
  FaShieldAlt,
  FaSnowflake,
  FaBluetooth,
  FaCamera,
  FaRoad,
} from "react-icons/fa";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import BookNowButton from "@/components/BookNowButton/BookNowButton";

async function SingleCarDetailsPage({ params }) {
  const { id } = await params;

  // token verification for server compnents 
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  // Fetch car details using the provided ID and token
  const carDetails = await fetchSingleCar(id, token);

  const {
    _id,
    name,
    image,
    carType,
    dailyRentPrice,
    availabilityStatus,
    description,
    seatCapacity,
    pickupLocation,
    bookingsCount,
    lastBookingAt,
  } = carDetails;

  const statusConfig = {
    available: {
      icon: FaCheckCircle,
      color: "bg-green-100 text-green-800 border-green-200",
      text: "Available Now",
      dot: "bg-green-500",
    },
    unavailable: {
      icon: FaTimesCircle,
      color: "bg-red-100 text-red-800 border-red-200",
      text: "Currently Unavailable",
      dot: "bg-red-500",
    },
    "under-maintenance": {
      icon: FaTools,
      color: "bg-yellow-100 text-yellow-800 border-yellow-200",
      text: "Under Maintenance",
      dot: "bg-yellow-500",
    },
  };

  const status = statusConfig[availabilityStatus] || statusConfig.available;
  const StatusIcon = status.icon;

  const features = [
    { icon: FaSnowflake, label: "Air Conditioning", included: true },
    { icon: FaBluetooth, label: "Bluetooth", included: true },
    { icon: FaCamera, label: "Backup Camera", included: true },
    { icon: FaShieldAlt, label: "Insurance Included", included: true },
  ];

  if (!carDetails) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <FaCar className="w-20 h-20 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            Car Not Found
          </h2>
          <p className="text-gray-500 mb-6">
            The car you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/explore-cars">
            <Button color="primary" size="lg">
              Back to Cars
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Back Navigation */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/explore-cars"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <FaArrowLeft className="w-4 h-4" />
            <span className="font-medium">Back to Cars</span>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative group rounded-2xl overflow-hidden shadow-xl">
              <img
                src={image}
                alt={name}
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all shadow-lg">
                  <FaHeart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
                </button>
                <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all shadow-lg">
                  <FaShareAlt className="w-5 h-5 text-gray-600 hover:text-blue-500 transition-colors" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4">
                <Chip
                  className={`px-4 py-2 border ${status.color} backdrop-blur-sm`}
                  size="lg"
                >
                  {status.text}
                </Chip>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((_, index) => (
                <div
                  key={index}
                  className="relative rounded-lg overflow-hidden cursor-pointer hover:ring-2 ring-blue-500 transition-all"
                >
                  <img
                    src={image}
                    alt={`${name} view ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Car Details */}
          <div className="space-y-6">
            {/* Title & Rating */}
            <div>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Chip color="primary" variant="flat" size="sm">
                      {carType}
                    </Chip>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`w-4 h-4 ${
                            i < 4 ? "text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">4.8</span>
                    </div>
                  </div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    {name}
                  </h1>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaMapMarkerAlt className="w-4 h-4 text-red-500" />
                    <span>{pickupLocation}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Price Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-blue-100 text-sm mb-1">Price per day</p>
                  <div className="flex items-baseline gap-1">
                    <FaDollarSign className="w-6 h-6" />
                    <span className="text-4xl font-bold">{dailyRentPrice}</span>
                    <span className="text-blue-200">/day</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-blue-100 text-sm mb-1">Weekly from</p>
                  <div className="flex items-baseline gap-1">
                    <FaDollarSign className="w-5 h-5" />
                    <span className="text-2xl font-bold">
                      {dailyRentPrice * 7}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <FaUserFriends className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">
                  {seatCapacity}
                </div>
                <div className="text-xs text-gray-500">Seats</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <FaCogs className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">
                  {bookingsCount || 0}
                </div>
                <div className="text-xs text-gray-500">Total Booking</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <FaGasPump className="w-6 h-6 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">Petrol</div>
                <div className="text-xs text-gray-500">Fuel Type</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <FaCalendarAlt className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                <div className="text-[20px] font-bold text-gray-800">
                  {lastBookingAt
                    ? new Date(lastBookingAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })
                    : "N/A"}
                </div>
                <div className="text-xs text-gray-500">Last Booking</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="w-full">
              <BookNowButton
                availabilityStatus={availabilityStatus}
                carDetails={carDetails}
              />
            </div>
          </div>
        </div>

        {/* Description & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Description */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Description
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {description}
              </p>
            </div>
          </div>

          {/* Features */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Features
              </h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <feature.icon
                      className={`w-5 h-5 ${
                        feature.included ? "text-green-500" : "text-gray-400"
                      }`}
                    />
                    <span className="text-gray-700">{feature.label}</span>
                    {feature.included ? (
                      <FaCheckCircle className="w-4 h-4 text-green-500 ml-auto" />
                    ) : (
                      <FaTimesCircle className="w-4 h-4 text-gray-400 ml-auto" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Rental Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800">Pickup Details</h3>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="w-5 h-5 text-red-500 mt-1" />
                <div>
                  <p className="text-gray-700 font-medium">Location</p>
                  <p className="text-gray-600">{pickupLocation}</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800">Pricing Details</h3>
              <div className="flex items-start gap-3">
                <FaDollarSign className="w-5 h-5 text-green-500 mt-1" />
                <div>
                  <p className="text-gray-700 font-medium">Daily Rate</p>
                  <p className="text-gray-600">
                    ${dailyRentPrice} per day (Discounts available for weekly
                    rentals)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleCarDetailsPage;
