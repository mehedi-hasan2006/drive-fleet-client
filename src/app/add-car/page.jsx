// components/CarListingForm.jsx
"use client";

import { useState } from "react";
import {
  Input,
  Button,
  Select,
  Card,
  TextField,
  Label,
  FieldError,
  ListBox,
  TextArea,
  toast,
} from "@heroui/react";
import {
  FaDollarSign,
  FaAlignLeft,
  FaCarSide,
  FaCouch,
  FaTag,
} from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

export default function CarListingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // get session
  const session = authClient.useSession();
  const user = session.data?.user;

  // submit handler
  const onSubmit = async (e) => {
    e.preventDefault();

    //token verification
    const { data: jwtData } = await authClient.token();
    const token = jwtData?.token;
    if (!token) {
      toast.error(" Authorization Failed. Booking Not Possible");
      return;
    }


    const formData = new FormData(e.target);
    const carName = formData.get("name");
    const carType = formData.get("carType");
    const dailyRentPrice = formData.get("dailyRentPrice");
    const carImage = formData.get("image");
    const seatCapacity = formData.get("seatCapacity");
    const pickupLocation = formData.get("pickupLocation");
    const description = formData.get("description");
    const availabilityStatus = formData.get("availabilityStatus");

    const carData = {
      addedBy: user?.name,
      userId: user?.id,
      email: user?.email,
      name: carName,
      carType,
      dailyRentPrice,
      image: carImage,
      seatCapacity,
      pickupLocation,
      description,
      availabilityStatus,
      addedAt: new Date().toISOString(),
    };

    // post api call
    const res = await fetch(`http://localhost:5000/cars`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(carData),
    });
    const data = await res.json();

    if (res.ok) {
      setIsSubmitting(false);
      toast.success("Car listing created successfully!");
      e.target.reset();
    } else {
      setIsSubmitting(false);
      toast.error(data.message || "Failed to create car listing");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-3xl mx-auto shadow-2xl border-0 bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 px-8 py-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm ring-1 ring-white/30">
              <FaCarSide className="w-10 h-10 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-1">
                List Your Vehicle
              </h2>
              <p className="text-blue-100 text-sm">
                Share your car with the community and start earning
              </p>
            </div>
          </div>
        </div>

        <div className="px-8 py-8">
          <form onSubmit={onSubmit} className="space-y-8">
            {/* Section: Basic Information */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gray-700 border-b border-gray-200 pb-3">
                <FaTag className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold">Basic Information</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TextField
                  isRequired
                  name="name"
                  type="text"
                  validate={(value) => {
                    if (!value.trim()) {
                      return "Please enter a valid name";
                    }
                    return null;
                  }}
                >
                  <Label className="text-gray-700 font-medium">Car Name</Label>
                  <Input
                    placeholder="e.g., Toyota Camry 2024"
                    className="mt-1"
                  />
                  <FieldError />
                </TextField>

                <Select
                  name="carType"
                  className="w-full"
                  placeholder="Select car type"
                  isRequired
                >
                  <Label className="text-gray-700 font-medium">Car Type</Label>
                  <Select.Trigger className="mt-1 bg-gray-50 border-gray-200">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="suv" textValue="suv">
                        SUV
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="sedan" textValue="sedan">
                        Sedan
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="hatchback" textValue="hatchback">
                        Hatchback
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="luxury" textValue="luxury">
                        Luxury
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>
            </div>

            {/* Section: Pricing & Image */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gray-700 border-b border-gray-200 pb-3">
                <FaDollarSign className="w-5 h-5 text-green-600" />
                <h3 className="text-lg font-semibold">Pricing & Image</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TextField
                  isRequired
                  name="dailyRentPrice"
                  type="number"
                  validate={(value) => {
                    if (!value.trim()) {
                      return "Please enter a valid daily rent price";
                    }
                    return null;
                  }}
                >
                  <Label className="text-gray-700 font-medium">
                    Daily Rent Price ($)
                  </Label>
                  <Input placeholder="e.g., 50.00" className="mt-1" />
                  <FieldError />
                </TextField>

                <TextField isRequired name="image" type="text">
                  <Label className="text-gray-700 font-medium">Image URL</Label>
                  <Input
                    placeholder="https://i.ibb.co/example.jpg"
                    className="mt-1"
                  />
                  <FieldError />
                </TextField>
              </div>
            </div>

            {/* Section: Capacity & Location */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gray-700 border-b border-gray-200 pb-3">
                <FaCouch className="w-5 h-5 text-orange-600" />
                <h3 className="text-lg font-semibold">Capacity & Location</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TextField isRequired name="seatCapacity" type="number">
                  <Label className="text-gray-700 font-medium">
                    Seat Capacity
                  </Label>
                  <Input placeholder="e.g., 5" className="mt-1" />
                  <FieldError />
                </TextField>

                <TextField isRequired name="pickupLocation" type="text">
                  <Label className="text-gray-700 font-medium">
                    Pickup Location
                  </Label>
                  <Input
                    placeholder="e.g., Downtown, Airport"
                    className="mt-1"
                  />
                  <FieldError />
                </TextField>
              </div>
            </div>

            {/* Section: Details & Status */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gray-700 border-b border-gray-200 pb-3">
                <FaAlignLeft className="w-5 h-5 text-purple-600" />
                <h3 className="text-lg font-semibold">Additional Details</h3>
              </div>

              <div className="space-y-2">
                <Label className="text-gray-700 font-medium">Description</Label>
                <TextArea
                  aria-label="Car description"
                  className="w-full"
                  name="description"
                  placeholder="Describe your car's features, condition, and any special notes..."
                />
              </div>

              <Select
                name="availabilityStatus"
                className="w-full md:w-64"
                placeholder="Select availability"
                isRequired
              >
                <Label className="text-gray-700 font-medium">
                  Availability Status
                </Label>
                <Select.Trigger className="mt-1 bg-gray-50 border-gray-200">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="available" textValue="Available">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        Available
                      </div>
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="unavailable" textValue="Unavailable">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        Unavailable
                      </div>
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item
                      id="under-maintenance"
                      textValue="Under Maintenance"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                        Under Maintenance
                      </div>
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              color="primary"
              size="lg"
              className="w-full font-semibold text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] py-6"
              isLoading={isSubmitting}
            >
              {isSubmitting ? "Creating Listing..." : "Create Car Listing"}
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
}
