import { auth } from "@/lib/auth";
import { fetchMyAddedCars } from "@/lib/fetchData";
import { headers } from "next/headers";
import Link from "next/link";
import { Card, Chip, Button, Separator } from "@heroui/react";
import {
  FaArrowRight,
  FaCar,
  FaEdit,
  FaTrash,
  FaUser,
  FaEnvelope,
  FaDollarSign,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCogs,
  FaStar,
  FaCheckCircle,
  FaTimesCircle,
  FaTools,
  FaClock,
  FaPlus,
} from "react-icons/fa";

async function MyAddedCarsPage() {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const myAddedCars = await fetchMyAddedCars(session?.user?.id, token);

  if (!myAddedCars || myAddedCars.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-lg">
              <FaCar className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              My Added Cars
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Track and manage all your added cars in one place
            </p>
          </div>

          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center p-6 bg-gray-100 rounded-full mb-6">
              <FaCar className="w-16 h-16 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-700 mb-3">
              No Added Cars Yet
            </h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              You haven&apos;t added any cars yet. Start adding your vehicles to
              our collection.
            </p>
            <Link href="/add-car">
              <span className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <FaPlus className="w-4 h-4" />
                Add Your First Car
                <FaArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Status configuration
  const getStatusConfig = (status) => {
    const configs = {
      available: {
        icon: FaCheckCircle,
        color: "bg-green-100 text-green-700 border-green-200",
        dot: "bg-green-500",
        label: "Available",
      },
      unavailable: {
        icon: FaTimesCircle,
        color: "bg-red-100 text-red-700 border-red-200",
        dot: "bg-red-500",
        label: "Unavailable",
      },
      "under-maintenance": {
        icon: FaTools,
        color: "bg-yellow-100 text-yellow-700 border-yellow-200",
        dot: "bg-yellow-500",
        label: "Under Maintenance",
      },
    };
    return configs[status] || configs.available;
  };

  // Calculate statistics
  const totalCars = myAddedCars.length;
  const availableCars = myAddedCars.filter(
    (car) => car.availabilityStatus === "available",
  ).length;
  const unavailableCars = myAddedCars.filter(
    (car) => car.availabilityStatus === "unavailable",
  ).length;
  const maintenanceCars = myAddedCars.filter(
    (car) => car.availabilityStatus === "under-maintenance",
  ).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-lg">
            <FaCar className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            My Added Cars
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Manage your car listings, update details, and track their
            availability status
          </p>
          <Link href="/add-car">
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <FaPlus className="w-4 h-4" />
              Add New Car
            </span>
          </Link>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <FaCar className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-sm text-gray-500">Total Cars</span>
            </div>
            <div className="text-3xl font-bold text-gray-800">{totalCars}</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <FaCheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-sm text-gray-500">Available</span>
            </div>
            <div className="text-3xl font-bold text-green-600">
              {availableCars}
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-red-100 rounded-lg">
                <FaTimesCircle className="w-5 h-5 text-red-600" />
              </div>
              <span className="text-sm text-gray-500">Unavailable</span>
            </div>
            <div className="text-3xl font-bold text-red-600">
              {unavailableCars}
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <FaTools className="w-5 h-5 text-yellow-600" />
              </div>
              <span className="text-sm text-gray-500">Maintenance</span>
            </div>
            <div className="text-3xl font-bold text-yellow-600">
              {maintenanceCars}
            </div>
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myAddedCars.map((car) => {
            const statusConfig = getStatusConfig(car.availabilityStatus);
            const StatusIcon = statusConfig.icon;

            return (
              <Card
                key={car._id}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="p-0">
                  {/* Car Image Section */}
                  <div className="relative h-52 overflow-hidden rounded-t-xl">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Status Badge */}
                    <div className="absolute top-3 right-3">
                      <Chip
                        className={`${statusConfig.color} backdrop-blur-sm border`}
                        size="sm"
                      >
                        {statusConfig.label}
                      </Chip>
                    </div>

                    {/* Price Badge */}
                    <div className="absolute top-3 left-3">
                      <Chip
                        className="bg-white/90 backdrop-blur-sm text-gray-800 font-bold"
                        size="sm"
                      >
                        {car.dailyRentPrice}/day
                      </Chip>
                    </div>

                    {/* Car Name Overlay */}
                    <div className="absolute bottom-3 left-3 right-20">
                      <h3 className="text-white font-bold text-xl truncate">
                        {car.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="px-2 py-0.5 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white">
                          {car.carType}
                        </span>
                        <div className="flex items-center gap-1 text-yellow-400">
                          <FaStar className="w-3 h-3" />
                          <span className="text-xs text-white">4.8</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Car Details */}
                  <div className="p-5">
                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {car.description}
                    </p>

                    {/* Info Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <div className="p-1.5 bg-blue-50 rounded-lg">
                          <FaUser className="w-3.5 h-3.5 text-blue-500" />
                        </div>
                        <span className="text-sm">
                          {car.seatCapacity} Seats
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <div className="p-1.5 bg-purple-50 rounded-lg">
                          <FaCogs className="w-3.5 h-3.5 text-purple-500" />
                        </div>
                        <span className="text-sm capitalize">
                          {car.carType}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 col-span-2">
                        <div className="p-1.5 bg-green-50 rounded-lg">
                          <FaMapMarkerAlt className="w-3.5 h-3.5 text-green-500" />
                        </div>
                        <span className="text-sm truncate">
                          {car.pickupLocation}
                        </span>
                      </div>
                    </div>

                    <Separator className="my-3" />

                    {/* Added Date */}
                    <div className="flex items-center gap-2 text-gray-500 text-xs mb-4">
                      <FaCalendarAlt className="w-3 h-3" />
                      <span>
                        Added on{" "}
                        {new Date(car.addedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1 ml-auto">
                        <FaClock className="w-3 h-3" />
                        {new Date(car.addedAt).toLocaleTimeString("en-US", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl">
                        <FaEdit className="w-4 h-4" />
                        Update
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-red-500/25 hover:shadow-xl">
                        <FaTrash className="w-4 h-4" />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* User Info Footer */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
              <FaUser className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg">
                {session?.user?.name}
              </h3>
              <p className="text-gray-500 text-sm flex items-center gap-1">
                <FaEnvelope className="w-3 h-3" />
                {session?.user?.email}
              </p>
            </div>
            <div className="ml-auto text-right">
              <p className="text-sm text-gray-500">Total Listings</p>
              <p className="text-2xl font-bold text-blue-600">{totalCars}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAddedCarsPage;
