"use client";
import { signOut } from "next-auth/react";
import React from "react";
import UploadModal from "../upload-modal";
import { useDisclosure } from "@nextui-org/react";

const SidebarIcon = ({ Icon, title }) => {
  const {isOpen, onOpen, onClose, onOpenChange} = useDisclosure();
  const clickSidebarIconHandle = () => {
    if (title === "Sign Out") {
      signOut();
      return
    };
    if (title === "Upload") {
      onOpen()
    }
  };
  return (
    <>
      <div
        className={`w-full flex items-center justify-center sm:justify-start space-x-2 p-4 ${
          title === "Upload" ? "hover:bg-red-200" : "hover:bg-gray-200"
        }  rounded-xl cursor-pointer`}
        onClick={clickSidebarIconHandle}
      >
        <Icon className="w-7 h-7 text-blue-500" />
        <p className="hidden sm:inline-flex font-medium">{title}</p>
      </div>
      <UploadModal isOpen={isOpen} onClose={onClose}  onOpenChange={onOpenChange}/>
    </>
  );
};

export default SidebarIcon;
