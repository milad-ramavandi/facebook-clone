import React from "react";
import VideoIcon from "../video-icon";
import SearchIcon from "../search-icon";
import EllipsisHorizontal from "../ellipsis-horizontal";
import Contact from "../contact";
import { getContactsAction } from "@/actions";

const SidebarRight = async () => {
  
  const data = await getContactsAction();
  return (
    <div className={"hidden lg:flex lg:flex-grow lg:flex-col lg:p-2"}>
      <div className={"flex justify-between items-center text-gray-500"}>
        <p className={"text-lg"}>Contacts</p>
        <div className={"flex space-x-2"}>
          <VideoIcon className={"size-6"} />
          <SearchIcon className={"size-6"} />
          <EllipsisHorizontal />
        </div>
      </div>
      <div className={"space-y-2"}>
        {data?.map((item) => (
          <Contact key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SidebarRight;
