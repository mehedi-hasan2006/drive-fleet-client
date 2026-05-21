"use client";

import { authClient, useSession } from "@/lib/auth-client";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  Avatar,
} from "@heroui/react";
import { FaEdit } from "react-icons/fa";

function MyProfilePage() {
  const { data: session } = authClient.useSession();
  const info = session?.user;

  const onSubmit = async (e) => {
    const name = e.target.name.value;
    const image = e.target.image.value;

    await authClient.updateUser({
      name,
      image,
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-8 border border-purple-100 text-center space-y-5">
        <h1 className="text-3xl font-bold bg-linear-to-r bg-linear-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          My Profile
        </h1>

        <div className="flex justify-center">
          <Avatar className="size-28 border-4 border-blue-300 shadow-md">
            <Avatar.Image
              alt={info?.name}
              src={info?.image}
              referrerPolicy="no-referrer"
            />
            <Avatar.Fallback>{info?.name?.charAt(0) || "U"}</Avatar.Fallback>
          </Avatar>
        </div>

        <div className="space-y-1">
          <p className="text-xl font-semibold text-gray-700">
            {info?.name || "No Name"}
          </p>
          <p className="text-gray-500 text-sm">{info?.email}</p>
        </div>

        {/* Modal */}
        <Modal>
          <Button className="bg-linear-to-r bg-gradient-to-r from-blue-600 to-purple-600 text-white  px-6">
            <FaEdit className="mr-2" />
            Edit Profile
          </Button>

          <Modal.Backdrop>
            <Modal.Container placement="center">
              <Modal.Dialog className="sm:max-w-md rounded-xl">
                <Modal.CloseTrigger />

                <Modal.Header>
                  <Modal.Icon className="bg-purple-200 text-purple-600">
                    <FaEdit />
                  </Modal.Icon>
                  <Modal.Heading>Edit Profile</Modal.Heading>
                </Modal.Header>

                <Modal.Body className="p-6">
                  <Surface>
                    <form onSubmit={onSubmit} className="flex flex-col gap-4">
                      <TextField className="w-full">
                        <Label>Name</Label>
                        <Input
                          name="name"
                          defaultValue={info?.name}
                          placeholder="Enter your name"
                        />
                      </TextField>

                      <TextField className="w-full" name="image">
                        <Label>Image URL</Label>
                        <Input
                          name="image"
                          defaultValue={info?.image}
                          placeholder="Enter your image URL"
                        />
                      </TextField>

                      <Modal.Footer>
                        <Button
                          slot="close"
                          variant="secondary"
                          className="text-purple-500"
                        >
                          Cancel
                        </Button>

                        <Button
                          type="submit"
                          slot="close"
                          className="bg-linear-to-r from-purple-500 to-blue-500 text-white"
                        >
                          Update
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
    </div>
  );
}

export default MyProfilePage;
