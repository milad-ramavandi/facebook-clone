'use client'
import { Skeleton } from "@nextui-org/react";
import React from "react";

const SkeletonContact = () => {
  return (
    <div
      className={
        "hidden lg:flex lg:flex-grow lg:flex-col lg:space-y-3 lg:mt-8 lg:p-2"
      }
    >
      <div className={"flex justify-between items-center text-gray-500"}>
        <div>
          <Skeleton className={"w-16 h-6 rounded-lg"} />
        </div>
        <div className={"flex space-x-2"}>
          <div>
            <Skeleton className={"w-6 h-6 rounded-full"} />
          </div>
          <div>
            <Skeleton className={"w-6 h-6 rounded-full"} />
          </div>
          <div className={"flex-grow"}>
            <Skeleton className={"w-6 h-6 rounded-full"} />
          </div>
        </div>
      </div>
      <div>
        {[...Array(7).keys()].map((_, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div>
              <Skeleton className={"w-12 h-12 rounded-full"} />
            </div>

            <div className={"flex-grow"}>
              <Skeleton className={"w-36 h-5 rounded-lg"} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonContact;
