"use client";
import { Skeleton } from "@nextui-org/react";
import React from "react";

const SkeletonStoriesFeed = () => {
  return (
    <div className="flex p-3 space-x-2 sm:space-x-3 overflow-auto scrollbar-hide bg-default-200 rounded-md">
      {[...Array(5)].map((_, index) => (
        <div key={index} className="relative min-w-14 min-h-14 md:min-w-20 md:min-h-20 lg:min-w-32 lg:min-h-56 rounded-full">
          <div className="w-12 h-12 hidden lg:block absolute top-4 left-4 z-50">
            <Skeleton className="w-full h-full rounded-full bg-default-300" />
          </div>

          <Skeleton
            className={
              "w-full h-full rounded-full lg:rounded-3xl"
            }
          />

          <div className="relative flex justify-center">
            <Skeleton className="w-5/6 h-5 absolute bottom-4 hidden lg:block rounded-lg bg-default-300" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonStoriesFeed;
