"use client";
import React from "react";
import VideoIcon from "../icons/video-icon";
import SearchIcon from "../icons/search-icon";
import EllipsisHorizontal from "../icons/ellipsis-horizontal";
import Contact from "../contact";
import { useQuery } from "react-query";
import SkeletonContacts from "../skeleton-contacts";
// import { getContactsAction } from "@/actions";

const SidebarRight = () => {
  // const data = await getContactsAction();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["contacts"],
    queryFn: async () => {
      return await fetch(`${process.env.DATABASE_URL}contacts`).then(
        async (res) => {
          return res.json()
        }
      )
    }
    })
  if (isLoading) {
    return <SkeletonContacts />;
  }
  if (isError) {
    throw new Error(error.message)
  }
  return (
    <div className={"hidden lg:flex lg:flex-grow lg:flex-col lg:p-2 mt-6 lg:!mr-2"}>
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
          <Contact key={item._id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SidebarRight;
