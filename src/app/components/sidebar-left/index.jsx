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
const titles = [
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
    <div className="p-2 mt-5 max-w-[600px] lg:min-w-[300px]">
      <div className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl">
        <Profile showTitle className={"w-7 h-7"} />
      </div>
      {titles.map((item, index) => (
        <SidebarIcon key={index} {...item}/>
      ))}
    </div>
  );
};

export default SidebarLeft;
