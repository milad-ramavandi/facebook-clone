import React from "react";
import HomeIcon from "../icons/home-icon";
import FlagIcon from "../icons/flag-icon";
import PlayIcon from "../icons/play-icon";
import ShoppingCartIcon from "../icons/shopping-cart-icon";
import UserGroupIcon from "../icons/user-group-icon";
import HeaderIcon from "../header-icon";

const icons = [
  {Icon:HomeIcon, active:true},
  {Icon:FlagIcon},
  {Icon:PlayIcon},
  {Icon:ShoppingCartIcon},
  {Icon:UserGroupIcon},
]

const HeaderCenter = () => {
  return (
    <div className="fixed bottom-2 left-0 w-full sm:relative sm:bottom-0 sm:justify-center sm:space-x-6 md:space-x-2">
      <div className="flex justify-between lg:justify-center w-[90%] mx-auto backdrop-blur-3xl rounded-xl px-2 py-4 sm:w-full sm:p-0">
      {icons.map((item, index) => (
        <HeaderIcon key={index} {...item}/>
      ))}
      </div>
    </div>
  );
};

export default HeaderCenter;
