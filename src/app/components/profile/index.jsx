"use client";
import { Avatar } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import React from "react";

const Profile = ({ showTitle, className, size }) => {
  const session = useSession();
  return (
    <div
      className={`sm:flex justify-center sm:justify-start items-center space-x-2  ${className}`}
    >
      <Avatar
        src={session?.data?.user?.image && session?.data?.user?.image}
        showFallback
        size={size}
      />

      {showTitle && (
        <p className={"whitespace-nowrap font-semibold hidden sm:block pr-4"}>
          {session?.data?.user?.name}
        </p>
      )}
    </div>
  );
};

export default Profile;
