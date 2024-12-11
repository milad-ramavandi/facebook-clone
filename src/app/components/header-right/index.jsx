"use client";
import React from "react";
import { HiViewGrid } from "react-icons/hi";
import { HiChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { HiBell } from "react-icons/hi2";
import { HiChevronDown } from "react-icons/hi";
import Profile from "../profile";

const HeaderRight = () => {
  return (
    <div className="flex justify-end items-center sm:space-x-2">
      <Profile showTitle/>
      <HiViewGrid className="icon" />
      <HiChatBubbleOvalLeftEllipsis className="icon" />
      <HiBell className="icon" />
      <HiChevronDown className="icon" />
    </div>
  );
};

export default HeaderRight;
