import React from "react";

const HeaderIcon = ({ active, Icon }) => {
  return (
    <div className="flex items-center cursor-pointer text-gray-500 md:h-14 md:px-[14px] lg:px-10 md:hover:bg-gray-100 hover:text-blue-500 rounded-xl md:active:border-b-2 md:active:border-b-blue-500" style={{
      color:`${active && '#3b82f6'}`
    }}>
      <Icon />
    </div>
  );
};

export default HeaderIcon;
