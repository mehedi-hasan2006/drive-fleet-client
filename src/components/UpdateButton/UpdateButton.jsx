"use client";
import { authClient } from "@/lib/auth-client";
import { updateCarData } from "@/lib/fetchData";
import {
  Button,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextField,
  Select,
  toast,
} from "@heroui/react";
import { FaEdit } from "react-icons/fa";

function UpdateButton({ car, carId }) {
  const {
    name,
    dailyRentPrice,
    description,
    availabilityStatus,
    image,
    carType,
    pickupLocation,
    seatCapacity,
  } = car;
  // get session
  const session = authClient.useSession();
  const user = session.data?.user;

  const handleUpdate = async (e) => {
    e.preventDefault();

    //token verification
    const { data: jwtData } = await authClient.token();
    const token = jwtData?.token;
    if (!token) {
      toast.danger(" Authorization Failed. Updating Not Possible");
      return;
    }

    // get form input
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
      name: carName,
      carType,
      dailyRentPrice,
      image: carImage,
      seatCapacity,
      pickupLocation,
      description,
      availabilityStatus,
      updateAt: new Date(),
    };

    const updateCarInfo = await updateCarData(carId, carData, token);
    const data = updateCarInfo;

    if (data.modifiedCount > 0) {
      toast.success("Car data updated successfully");
      window.location.reload();
    } else {
      toast.danger("Car data update failed");
    }
  };

  return (
    <div className="">
      <Modal>
        <Button className=" flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl">
          <FaEdit className="w-4 h-4" />
          Update
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <FaEdit className="size-5" />
                </Modal.Icon>
                <Modal.Heading>Edit Your Car Info</Modal.Heading>
                <p className="mt-1.5 text-sm leading-5 text-muted">
                  Fill out the form below for edit your car info.
                </p>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={handleUpdate} className="flex flex-col gap-4">
                    <TextField
                      className="w-full"
                      name="name"
                      type="text"
                      variant="secondary"
                      defaultValue={name}
                      isRequired
                    >
                      <Label>Name</Label>
                      <Input placeholder="Enter Your Car Name" />
                    </TextField>
                    <TextField
                      className="w-full"
                      name="dailyRentPrice"
                      type="number"
                      variant="secondary"
                      defaultValue={dailyRentPrice}
                      isRequired
                    >
                      <Label>Price</Label>
                      <Input placeholder="Enter your car rent price" />
                    </TextField>
                    <TextField
                      className="w-full"
                      name="description"
                      type="text"
                      variant="secondary"
                      defaultValue={description}
                      isRequired
                    >
                      <Label>Desciption</Label>
                      <Input placeholder="Enter your car description" />
                    </TextField>
                    <TextField
                      className="w-full"
                      name="seatCapacity"
                      type="number"
                      variant="secondary"
                      defaultValue={seatCapacity}
                      isRequired
                    >
                      <Label>Seat Capacity</Label>
                      <Input placeholder="Enter Seat Capacity" />
                    </TextField>
                    <TextField
                      className="w-full"
                      name="image"
                      type="text"
                      variant="secondary"
                      defaultValue={image}
                      isRequired
                    >
                      <Label>Image URL</Label>
                      <Input placeholder="Enter your car image URL" />
                    </TextField>
                    <TextField
                      className="w-full"
                      name="pickupLocation"
                      type="text"
                      variant="secondary"
                      defaultValue={pickupLocation}
                      isRequired
                    >
                      <Label>Location</Label>
                      <Input placeholder="Enter your Pick Up Location" />
                    </TextField>
                    <Select
                      name="carType"
                      className="w-full"
                      placeholder="Select car type"
                      isRequired
                      defaultValue={carType}
                    >
                      <Label className="text-gray-700 font-medium">
                        Car Type
                      </Label>
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
                    <Select
                      name="availabilityStatus"
                      className="w-full "
                      placeholder="Select availability"
                      defaultValue={availabilityStatus}
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
                          <ListBox.Item
                            id="unavailable"
                            textValue="Unavailable"
                          >
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
                    <Modal.Footer>
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>
                      <Button type="submit">Confirm Edit</Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
}

export default UpdateButton;
