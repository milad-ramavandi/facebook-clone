"use client";

import { Skeleton } from "@nextui-org/react";
import React from "react";

const SkeletioContactTop = () => {
  return (
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
  );
};

export default SkeletioContactTop;
