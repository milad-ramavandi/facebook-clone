import { Badge, Skeleton } from "@nextui-org/react";
import React from "react";

const SkeletonContactBotton = () => {
  return (
    <div className="flex items-center space-x-3">
      <Badge content="" color={"default"} placement="bottom-right">
        <div>
          <Skeleton className={"w-12 h-12 rounded-full"} />
        </div>
      </Badge>

      <div className={"flex-grow"}>
        <Skeleton className={"w-36 h-5 rounded-lg"} />
      </div>
    </div>
  );
};

export default SkeletonContactBotton;
