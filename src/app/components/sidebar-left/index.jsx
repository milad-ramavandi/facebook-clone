"use client";
import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { HiOutlineTv } from "react-icons/hi2";
import { HiCalendar } from "react-icons/hi";
import { MdAccessTimeFilled } from "react-icons/md";
import { HiChevronDown } from "react-icons/hi";
import { PiSignOut } from "react-icons/pi";
import SidebarIcon from "../sidebar-icon";
import Profile from "../profile";
import PlusIcon from "../icons/plus-icon";
const titles = [
  { Icon: PlusIcon, title: "Upload" },
  { Icon: FaUserFriends, title: "Friends" },
  { Icon: HiUserGroup, title: "Groups" },
  { Icon: HiOutlineShoppingBag, title: "Marketplace" },
  { Icon: HiOutlineTv, title: "Watch" },
  { Icon: HiCalendar, title: "Events" },
  { Icon: MdAccessTimeFilled, title: "Memories" },
  { Icon: PiSignOut, title: "Sign Out" },
  { Icon: HiChevronDown, title: "See More" },
];
const SidebarLeft = () => {
  return (
    <div className="pl-2 pb-44 min-w-[65px] lg:min-w-[300px] h-screen overflow-auto scrollbar-hide mt-6">
      <Profile showTitle size={"sm"} isStory className={"p-4"}/>
      {titles.map((item, index) => (
        <SidebarIcon key={index} {...item} />
      ))}
    </div>
  );
};

export default SidebarLeft;
