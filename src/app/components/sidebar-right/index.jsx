import React from "react";
import VideoIcon from "../video-icon";
import SearchIcon from "../search-icon";
import EllipsisHorizontal from "../ellipsis-horizontal";
import { useQuery } from "react-query";
import Contact from "../contact";
import SkeletonContact from "../skeleton-contact";

const SidebarRight = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["contacts"],
    queryFn: async () =>
      await fetch("http://localhost:8000/contacts").then((res) => res.json()),
  });
  if (isLoading) {
    return <SkeletonContact/>
  }
  return (
    <div className={"hidden lg:flex lg:flex-grow lg:flex-col lg:p-2"}>
      <div className={"flex justify-between items-center mt-5 text-gray-500"}>
        <p className={"text-lg"}>Contacts</p>
        <div className={"flex space-x-2"}>
          <VideoIcon className={"size-6"} />
          <SearchIcon className={"size-6"} />
          <EllipsisHorizontal />
        </div>
      </div>
      {data?.map((item) => (
        <Contact key={item.id} {...item} />
      ))}
    </div>
  );
};

export default SidebarRight;
