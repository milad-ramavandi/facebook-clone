import React from "react";
import HeaderLeft from "../header-left";
import HeaderCenter from "../header-center";
import HeaderRight from "../header-right";

const Header = () => {
  return (
    <header className="flex items-center space-x-6 p-2 shadow-md sticky top-0 z-50 bg-white overflow-auto scrollbar-hide">
      <HeaderLeft />
      <HeaderCenter/>
      <HeaderRight/>
    </header>
  );
};

export default Header;
