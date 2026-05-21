"use client";
import { authClient } from "@/lib/auth-client";
import { deleteCarData } from "@/lib/fetchData";
import { AlertDialog, Button } from "@heroui/react";
import React from "react";
import { FaTrash } from "react-icons/fa";

function DeleteButton({ car, carId }) {
  const handleDelete = async () => {
    // get session
    const session = authClient.useSession();
    const user = session.data?.user;

    //token verification
    const { data: jwtData } = await authClient.token();
    const token = jwtData?.token;
    if (!token) {
      toast.danger(" Authorization Failed. Deleting Not Possible");
      return;
    }

    const deleteApi = await deleteCarData(carId, token);

    window.location.reload();
  };
  return (
    <div className="">
      <AlertDialog>
        <Button className=" flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-red-500/25 hover:shadow-xl">
          <FaTrash className="w-4 h-4" />
          Delete
        </Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-[400px]">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>
                  Delete Car permanently?
                </AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  This will permanently delete <strong>{car.name}</strong> and
                  all of its data. This action cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button onClick={handleDelete} slot="close" variant="danger">
                  Delete Car
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
}

export default DeleteButton;
