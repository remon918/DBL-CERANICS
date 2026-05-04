import { authClient } from "@/lib/auth-client";
import React from "react";
import { BiEdit } from "react-icons/bi";
import { toast } from "react-toastify";

const ModalUpdate = ({ user }) => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    try {
    await authClient.updateUser({ name, image });

    document.getElementById("my_modal_1").close();
    toast.success("Profile updated");
  } catch (err) {
    console.log(err);
    toast.error("Update failed");
  }


  };
  return (
    <div>
      <button
        onClick={() => document.getElementById("my_modal_1").showModal()}
        className="btn bg-purple-600 w-full mt-5 text-white flex items-center gap-2"
      >
        <BiEdit /> Update Profile
      </button>

      <dialog id="my_modal_1"
  className="modal"
  onClick={(e) => {
    if (e.target.id === "my_modal_1") {
      e.target.close();
    }
  }}>
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Update Profile</h3>

          <form onSubmit={onSubmit} className="space-y-4">
            {/* Name */}
            <div className="flex flex-col text-left">
              <label className="text-sm font-semibold mb-1">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={user?.name}
                placeholder="Enter your name"
                className="input input-bordered w-full"
              />
            </div>

            {/* Email (readonly) */}
            <div className="flex flex-col text-left">
              <label className="text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                readOnly
                className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
              />
            </div>

            {/* Image */}
            <div className="flex flex-col text-left">
              <label className="text-sm font-semibold mb-1">
                Profile Image URL
              </label>
              <input
                type="text"
                name="image"
                defaultValue={user?.image}
                placeholder="Paste image URL"
                className="input input-bordered w-full"
              />
            </div>

            <div className="modal-action">
              <button type="submit" className="btn bg-purple-600 text-white">
                Save
              </button>
              <button
                className="btn"
                type="button"
                onClick={() => document.getElementById("my_modal_1").close()}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ModalUpdate;
