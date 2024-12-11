import React, { Suspense } from "react";
import VideoIcon from "../video-icon";
import SearchIcon from "../search-icon";
import EllipsisHorizontal from "../ellipsis-horizontal";
// import { useQuery } from "react-query";
import Contact from "../contact";
import SkeletonContactBotton from "../skeleton-contact";
import SkeletioContactTop from "../skeleton-contact-top";
import SkeletonContact from "../skeleton-contact";
import { getContactsAction } from "@/actions";

const SidebarRight = async () => {
  // const { data, isLoading } = useQuery({
  //   queryKey: ["contacts"],
  //   queryFn: async () =>
  //     await fetch(`${process.env.NEXT_URL}contacts`).then((res) => res.json()),
  // });
  // if (isLoading) {
  //   return (
  //     <div className={"hidden lg:flex lg:flex-grow lg:flex-col lg:space-y-3 lg:mt-8 lg:p-2"}>
  //       <SkeletioContactTop />
  //       <div className={'space-y-6'}>
  //         {[...Array(7)].map((_, index) => (
  //           <SkeletonContactBotton key={index} />
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }
  const data = await getContactsAction();
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
      <div className={"space-y-2"}>
        {data?.map((item) => (
          <Contact key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SidebarRight;
