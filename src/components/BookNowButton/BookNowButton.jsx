"use client";
import { authClient, useSession } from "@/lib/auth-client";
import {
  Button,
  Select,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  toast,
} from "@heroui/react";
import { FaPlus } from "react-icons/fa";

function BookNowButton({ availabilityStatus, carDetails }) {
  const { data: session } = useSession();

  const handleBook = async (e) => {
    e.preventDefault();
    const { data: jwtData } = await authClient.token();

    const token = jwtData?.token;

    if (!token) {
      toast.error(" Authorization Failed. Booking Not Possible");
      return;
    }

    // const formData = new FormData(e.currentTarget);
    const driverNeed = e.target.driverNeed.value;
    const message = e.target.message.value;

    console.log({ driverNeed, message });

    const bookingData = {
      userId: session?.user?.id,
      name: session?.user?.name,
      email: session?.user?.email,
      carTitle: carDetails?.name,
      carImage: carDetails?.image,
      carPrice : carDetails?.dailyRentPrice,
      driverNeed,
      message,
    };

    const res = await fetch(
      `http://localhost:5000/bookings/${carDetails?._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(bookingData),
      },
    );

    const data = await res.json();
    if (res.ok) {
      toast.success("Booking Successful!");
    } else {
      toast.error("Booking Failed. Please Try Again");
    }
  };

  return (
    <div>
      <Modal>
        <Button
          color="primary"
          size="lg"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 font-semibold text-lg py-7"
          isDisabled={availabilityStatus !== "available"}
        >
          {availabilityStatus === "available" ? "Book Now" : "Not Available"}
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <FaPlus className="size-5" />
                </Modal.Icon>
                <Modal.Heading> Car Booking Form </Modal.Heading>
                <p className="mt-1.5 text-sm leading-5 text-muted">
                  Please fill out the form below to book this car. We will get
                  back to you shortly with the booking details.
                </p>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={handleBook} className="flex flex-col gap-4">
                    <Select
                      name="driverNeed"
                      className="w-full"
                      placeholder="Select one"
                    >
                      <Label>Driver Need? </Label>
                      <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox>
                          <ListBox.Item id="yes" textValue="Yes">
                            Yes
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="no" textValue="No">
                            No
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>
                    <TextField className="w-full" name="message">
                      <Label htmlFor="textarea-rows-3">Special Note</Label>
                      <TextArea
                        name="message"
                        aria-label="Special note"
                        id="textarea-rows-3"
                        placeholder="Any special requests or instructions for the booking?"
                        rows={3}
                      />
                    </TextField>
                    <Modal.Footer>
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>
                      <Button slot="close" type="submit">
                        Book Now
                      </Button>
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

export default BookNowButton;
