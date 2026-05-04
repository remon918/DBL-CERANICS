"use client";

import ModalUpdate from "@/components/shared/ModalUpdate";
import Navbar from "@/components/shared/Navbar";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  const user = session?.user;

  return (
    <div className="">
      <Navbar />
    <div className="min-h-[80vh] flex justify-center items-center bg-base-200 p-4">
      <div className="bg-base-100 shadow-xl rounded-2xl p-6 w-full max-w-sm text-center">
        {/* Avatar */}
        <div className="flex justify-center mb-4">
          <Image
            src={
              user?.image ||
              "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
            }
            width={100}
            height={100}
            alt="avatar"
            className="rounded-full border-4 border-primary object-cover"
          />
        </div>

        {/* Name */}
        <h2 className="text-xl font-bold mb-1">{user?.name || "Guest User"}</h2>

        {/* Email */}
        <p className="text-sm text-gray-500 mb-4">
          {user?.email || "No email"}
        </p>

        {/* Verified badge */}
        {user?.emailVerified && (
          <p className="text-green-500 text-sm mb-4 flex  items-center justify-center gap-2">
            <FaCircleCheck /> Email Verified
          </p>
        )}

        {/* Info Box */}
        <div className="bg-base-200 rounded-lg p-3 text-left text-sm space-y-2">
          <p>
            <span className="font-semibold">User ID:</span> {user?.id}
          </p>
          <p>
            <span className="font-semibold">Last Updated:</span>{" "}
            {user?.updatedAt
              ? new Date(user.updatedAt).toLocaleString()
              : "N/A"}
          </p>
        </div>

        {/* Logout Button (optional) */}
        <ModalUpdate user ={user}/>
      </div>
    </div>
    </div>
  );
};

export default ProfilePage;
