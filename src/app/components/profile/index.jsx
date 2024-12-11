"use client";
import { Avatar, Skeleton } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Profile = ({ showTitle }) => {
  const session = useSession();
  return (
    <div className={"flex items-center space-x-2"}>
      <Avatar src={session?.data?.user?.image && session?.data?.user?.image} showFallback />

      {showTitle && (
        <p className={"whitespace-nowrap font-semibold hidden md:block pr-4"}>
          {session?.data?.user?.name}
        </p>
      )}
    </div>
  );
};

export default Profile;
