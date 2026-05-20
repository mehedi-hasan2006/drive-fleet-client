// components/ExploreCars.jsx  all cars card here

import { Card, Button, Input, Select, Chip } from "@heroui/react";
import {
  FaCar,
  FaDollarSign,
  FaUserFriends,
  FaMapMarkerAlt,
  FaSearch,
  FaStar,
  FaGasPump,
  FaCalendarAlt,
  FaHeart,
  FaShareAlt,
  FaCarSide,
  FaFilter,
} from "react-icons/fa";
import Link from "next/link";
import { fetchCars } from "@/lib/fetchData";

export default async function ExploreCars({ searchParams }) {
  // console.log("Received Search Params in ExploreCars:", searchParams);
  const sParams = await searchParams;
  // console.log("Search Params in ExploreCars:", sParams);

  const cars = await fetchCars(sParams?.searchTerm || "");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-2xl mb-4">
            <FaCarSide className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
            Explore Our Cars
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find the perfect vehicle for your next journey. From economy to
            luxury, we have it all.
          </p>
        </div>

        {/* Stats Section */}
        {cars.length > 0 && (
          <div className="my-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <FaCar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-800">
                {cars.length}
              </div>
              <div className="text-sm text-gray-600">Available Cars</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <FaStar className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-800">4.8</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <FaMapMarkerAlt className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-800">12+</div>
              <div className="text-sm text-gray-600">Pickup Locations</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <FaDollarSign className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-800">$45</div>
              <div className="text-sm text-gray-600">Starting From</div>
            </div>
          </div>
        )}

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Input placeholder="Search cars by name..." className="flex-1" />
          {/* <Select
            placeholder="Filter by type"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full md:w-48"
            
          >
            <option value="all">All Types</option>
            <option value="suv">SUV</option>
            <option value="sedan">Sedan</option>
            <option value="hatchback">Hatchback</option>
            <option value="luxury">Luxury</option>
            <option value="sports">Sports</option>
          </Select> */}
        </div>

        {/* Cars Grid */}
        {cars.length === 0 ? (
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
            {cars.map((car) => (
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
                        <FaHeart />
                      </button>
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
                      <Link href={`/car-details/${car._id}`}>
                        <Button
                          className="flex-1 border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50"
                          variant="bordered"
                          size="md"
                        >
                          Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
