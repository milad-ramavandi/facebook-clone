"use client";
import { Skeleton } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Profile = ({ showTitle, className }) => {
  const session = useSession();
  return (
    <>
      {session?.data?.user?.image && session?.data?.user?.name ? (
        <div className={"flex items-center space-x-2"}>
          <div className={`relative ${className}`}>
            <Image
              fill
              src={session?.data?.user?.image}
              alt={session?.data?.user?.name}
              className="object-cover rounded-full"
            />
          </div>

          {showTitle && (
            <p
              className={"whitespace-nowrap font-semibold hidden sm:block pr-4"}
            >
              {session?.data?.user?.name}
            </p>
          )}
        </div>
      ) : (
        <div className={"flex items-center space-x-2"}>
          <div>
            <Skeleton className={`${className} rounded-full`} />
          </div>
          {showTitle && (
            <div>
              <Skeleton className="w-20 h-5 rounded-lg" />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Profile;
