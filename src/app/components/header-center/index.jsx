import React from "react";
import HomeIcon from "../home-icon";
import FlagIcon from "../flag-icon";
import PlayIcon from "../play-icon";
import ShoppingCartIcon from "../shopping-cart-icon";
import UserGroupIcon from "../user-group-icon";
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
    <div className="flex flex-grow justify-center space-x-6 md:space-x-2">
      {icons.map((item, index) => (
        <HeaderIcon key={index} {...item}/>
      ))}
    </div>
  );
};

export default HeaderCenter;
