"use client";
import { signOut } from "next-auth/react";
import React from "react";

const SidebarIcon = ({ Icon, title }) => {
  const clickSignOut = () => {
    if (title !== 'Sign Out') return
    signOut()
  }
  return (
    <div className="flex items-center justify-center sm:justify-start space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer" onClick={clickSignOut}>
      <Icon className="w-7 h-7 text-blue-500" />
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  );
};

export default SidebarIcon;
