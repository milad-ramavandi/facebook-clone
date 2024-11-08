'use client'
import { Skeleton } from "@nextui-org/react";
import React from "react";

const SkeletonStoriesFeed = () => {
  return (
    <div className="flex justify-center space-x-3">
      <div className="relative w-14 h-14 md:w-20 md:h-20 lg:w-32 lg:h-56 cursor-pointer transition duration-200 ease-in hover:scale-105 hover:animate-pulse">
        <div className="w-12 h-12 hidden lg:block absolute top-4 left-4 z-50">
          <Skeleton className="w-full h-full rounded-full" />
        </div>

        <Skeleton
          className={"w-full h-full brightness-75 rounded-full lg:rounded-3xl"}
        />

        <div className="relative flex justify-center">
          <Skeleton className="w-5/6 h-5 absolute bottom-4 hidden lg:block rounded-lg" />
        </div>
      </div>
      <div className="relative w-14 h-14 md:w-20 md:h-20 lg:w-32 lg:h-56 cursor-pointer transition duration-200 ease-in hover:scale-105 hover:animate-pulse">
        <div className="w-12 h-12 hidden lg:block absolute top-4 left-4 z-50">
          <Skeleton className="w-full h-full rounded-full" />
        </div>

        <Skeleton
          className={"w-full h-full brightness-75 rounded-full lg:rounded-3xl"}
        />

        <div className="relative flex justify-center">
          <Skeleton className="w-5/6 h-5 absolute bottom-4 hidden lg:block rounded-lg" />
        </div>
      </div>
      <div className="relative w-14 h-14 md:w-20 md:h-20 lg:w-32 lg:h-56 cursor-pointer transition duration-200 ease-in hover:scale-105 hover:animate-pulse">
        <div className="w-12 h-12 hidden lg:block absolute top-4 left-4 z-50">
          <Skeleton className="w-full h-full rounded-full" />
        </div>

        <Skeleton
          className={"w-full h-full brightness-75 rounded-full lg:rounded-3xl"}
        />

        <div className="relative flex justify-center">
          <Skeleton className="w-5/6 h-5 absolute bottom-4 hidden lg:block rounded-lg" />
        </div>
      </div>
      <div className="relative w-14 h-14 md:w-20 md:h-20 lg:w-32 lg:h-56 cursor-pointer transition duration-200 ease-in hover:scale-105 hover:animate-pulse">
        <div className="w-12 h-12 hidden lg:block absolute top-4 left-4 z-50">
          <Skeleton className="w-full h-full rounded-full" />
        </div>

        <Skeleton
          className={"w-full h-full brightness-75 rounded-full lg:rounded-3xl"}
        />

        <div className="relative flex justify-center">
          <Skeleton className="w-5/6 h-5 absolute bottom-4 hidden lg:block rounded-lg" />
        </div>
      </div>
      <div className="relative w-14 h-14 md:w-20 md:h-20 lg:w-32 lg:h-56 cursor-pointer transition duration-200 ease-in hover:scale-105 hover:animate-pulse">
        <div className="w-12 h-12 hidden lg:block absolute top-4 left-4 z-50">
          <Skeleton className="w-full h-full rounded-full" />
        </div>

        <Skeleton
          className={"w-full h-full brightness-75 rounded-full lg:rounded-3xl"}
        />

        <div className="relative flex justify-center">
          <Skeleton className="w-5/6 h-5 absolute bottom-4 hidden lg:block rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonStoriesFeed;
