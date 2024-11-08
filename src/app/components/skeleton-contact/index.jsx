import { Badge, Skeleton } from "@nextui-org/react";
import React from "react";

const SkeletonContact = () => {
  return (
    <div className={"hidden lg:flex lg:flex-grow lg:flex-col lg:p-2"}>
      <div className={"flex justify-between items-center mt-5 text-gray-500"}>
        <div>
          <Skeleton className={"w-14 h-5 rounded-lg"} />
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
      <div className="flex items-center space-x-3 mb-2 p-2">
        <Badge content="" color={"default"} placement="bottom-right">
          <div>
            <Skeleton className={"w-12 h-12 rounded-full"} />
          </div>
        </Badge>

        <div className={"flex-grow"}>
          <Skeleton className={"w-20 h-5 rounded-lg"} />
        </div>
      </div>
      <div className="flex items-center space-x-3 mb-2 p-2">
        <Badge content="" color={"default"} placement="bottom-right">
          <div>
            <Skeleton className={"w-12 h-12 rounded-full"} />
          </div>
        </Badge>

        <div className={"flex-grow"}>
          <Skeleton className={"w-20 h-5 rounded-lg"} />
        </div>
      </div>
      <div className="flex items-center space-x-3 mb-2 p-2">
        <Badge content="" color={"default"} placement="bottom-right">
          <div>
            <Skeleton className={"w-12 h-12 rounded-full"} />
          </div>
        </Badge>

        <div className={"flex-grow"}>
          <Skeleton className={"w-20 h-5 rounded-lg"} />
        </div>
      </div>
      <div className="flex items-center space-x-3 mb-2 p-2">
        <Badge content="" color={"default"} placement="bottom-right">
          <div>
            <Skeleton className={"w-12 h-12 rounded-full"} />
          </div>
        </Badge>

        <div className={"flex-grow"}>
          <Skeleton className={"w-20 h-5 rounded-lg"} />
        </div>
      </div>
      <div className="flex items-center space-x-3 mb-2 p-2">
        <Badge content="" color={"default"} placement="bottom-right">
          <div>
            <Skeleton className={"w-12 h-12 rounded-full"} />
          </div>
        </Badge>

        <div className={"flex-grow"}>
          <Skeleton className={"w-20 h-5 rounded-lg"} />
        </div>
      </div>
      <div className="flex items-center space-x-3 mb-2 p-2">
        <Badge content="" color={"default"} placement="bottom-right">
          <div>
            <Skeleton className={"w-12 h-12 rounded-full"} />
          </div>
        </Badge>

        <div className={"flex-grow"}>
          <Skeleton className={"w-20 h-5 rounded-lg"} />
        </div>
      </div>
      <div className="flex items-center space-x-3 mb-2 p-2">
        <Badge content="" color={"default"} placement="bottom-right">
          <div>
            <Skeleton className={"w-12 h-12 rounded-full"} />
          </div>
        </Badge>

        <div className={"flex-grow"}>
          <Skeleton className={"w-20 h-5 rounded-lg"} />
        </div>
      </div>
    </div>
  );
};

export default SkeletonContact;
