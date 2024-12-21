"use client";
import Image from "next/image";
import React from "react";
import StoryModal from "../story-modal";
import { useDisclosure } from "@nextui-org/react";

const StoryCard = ({ _id, name, src, profile, description }) => {
  const {isOpen, onOpen, onClose, onOpenChange} = useDisclosure();
  return (
    <>
      <div className="relative p-3 min-w-14 min-h-14 md:min-w-20 md:min-h-20 lg:min-w-32 lg:min-h-56 cursor-pointer transition duration-200 ease-in hover:scale-105 hover:animate-pulse hover:z-50" onClick={onOpen}>
        <div className="w-12 h-12 hidden lg:block absolute top-4 z-50">
          <Image
            src={profile}
            fill
            alt={description}
            className="object-cover object-top rounded-full"
          />
        </div>
        {!src?.startsWith("data:video") ? (
          <Image
            fill
            src={src}
            alt={description}
            className="object-cover brightness-75 rounded-full lg:rounded-3xl"
          />
        ) : (
          <video
            src={src}
            className="w-full h-full absolute top-0 left-0 right-0 bottom-0 object-fill brightness-75 lg:rounded-3xl rounded-full"
            loop
            autoPlay
            muted
          />
        )}
        <p className="w-5/6 absolute bottom-4 hidden lg:block text-white font-bold truncate">
          {name}
        </p>
      </div>
      <StoryModal isOpen={isOpen} onClose={onClose} onOpenChange={onOpenChange} id={_id} src={src} name={name}/>
    </>
  );
};

export default StoryCard;
