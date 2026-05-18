import { featuredCars } from "@/lib/fetchData";
import { Button, Card, Chip } from "@heroui/react";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaCar,
  FaDollarSign,
  FaGasPump,
  FaMapMarkerAlt,
  FaShareAlt,
  FaStar,
  FaUserFriends,
} from "react-icons/fa";

async function FeaturedCars() {
  const featureCars = await featuredCars();
  return (
    <div className="container mx-auto px-4 py-12">
      <div>
        <h1 className="text-4xl font-bold mb-6">Featured Cars</h1>

        {/* Cars Grid */}
        {featureCars.length === 0 ? (
          <div className="text-center py-20">
            <FaCar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-500 mb-2">
              No cars found
            </h3>
            <p className="text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCars.map((car) => (
              <Card
                key={car._id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-0">
                  {/* Image Section */}
                  <div className="relative overflow-hidden rounded-t-lg h-48">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 flex gap-2">
                      <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                        <FaShareAlt className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                    {car.availabilityStatus && (
                      <Chip
                        className={`absolute top-3 left-3 ${car.availabilityStatus === "unavailable" ? "bg-red-100 text-red-700" : car.availabilityStatus === "under-maintenance" ? "bg-yellow-100 text-yellow-700" : car.availabilityStatus === "available" ? "bg-green-100 text-green-600" : ""}  font-semibold`}
                        size="sm"
                      >
                        {car.availabilityStatus}
                      </Chip>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h2 className="text-xl font-bold text-gray-800 mb-1">
                          {car.name}
                        </h2>
                        <div className="flex items-center gap-1">
                          <FaStar className="w-4 h-4 text-yellow-400" />
                          <span className="text-sm text-gray-600 font-medium">
                            {car.rating || 4.8}
                          </span>
                          <span className="text-sm text-gray-400">
                            {`(${car.reviewCount || 24} reviews)`}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-blue-600">
                          <FaDollarSign className="w-4 h-4" />
                          <span className="text-2xl font-bold">
                            {car.dailyRentPrice}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500">per day</span>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {car.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <FaUserFriends className="w-4 h-4 text-blue-500" />
                        <span className="text-sm">
                          {car.seatCapacity} seats
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <FaGasPump className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Petrol</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <FaMapMarkerAlt className="w-4 h-4 text-red-500" />
                        <span className="text-sm truncate">
                          {car.pickupLocation}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <FaCalendarAlt className="w-4 h-4 text-purple-500" />
                        <span className="text-sm">{car.year || "2024"}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold hover:from-blue-700 hover:to-blue-800"
                        size="md"
                      >
                        Rent Now
                      </Button>
                      <Button
                        className="flex-1 border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50"
                        variant="bordered"
                        size="md"
                      >
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
        <div>
          <Link href="/explore-cars" className="">
            <Button
              className="mt-8 mx-auto block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              size="lg"
            >
              View All Cars
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCars;
