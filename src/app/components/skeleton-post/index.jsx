import { Skeleton } from "@nextui-org/react";
import React from "react";

const SkeletonPost = () => {
  return (
    <div
      className={
        "flex flex-col bg-white p-5 mt-5 shadow-md rounded-t-2xl space-y-4"
      }
    >
      <div className={"flex justify-between items-center"}>
        <div className="flex items-center space-x-2">
          <div>
            <Skeleton className="w-12 h-12 rounded-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="w-12 h-3 rounded-lg" />
            <Skeleton className="w-20 h-3 rounded-lg" />
          </div>
        </div>
        <div>
          <Skeleton className="w-5 h-8 rounded-lg" />
        </div>
      </div>
      <div>
        <Skeleton className="w-1/2 h-5 rounded-lg" />
      </div>
      <div>
        <Skeleton className="w-full h-56 md:h-96 rounded-lg" />
      </div>
      <div
        className={
          "flex justify-between items-center text-gray-400 border-t pt-1"
        }
      >
        <div>
          <Skeleton className="w-20 h-5 rounded-lg" />
        </div>
        <div>
          <Skeleton className="w-20 h-5 rounded-lg" />
        </div>
        <div>
          <Skeleton className="w-20 h-5 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonPost;
