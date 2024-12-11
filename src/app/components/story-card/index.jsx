"use client";
import Image from "next/image";
import React from "react";

const StoryCard = ({ name, src, profile, description }) => {
  return (
    <div className="relative min-w-14 min-h-14 md:w-20 md:h-20 lg:w-32 lg:h-56 cursor-pointer p-3 transition duration-200 ease-in hover:scale-105 hover:animate-pulse">
      <div className="w-12 h-12 hidden lg:block absolute top-4 z-50">
        <Image
          src={profile}
          fill
          alt={description}
          className="object-cover object-top rounded-full"
        />
      </div>
      <Image
        fill
        src={src}
        alt={description}
        className="object-cover brightness-75 rounded-full lg:rounded-3xl"
      />
      <p className="w-5/6 absolute bottom-4 hidden lg:block text-white font-bold truncate">
        {name}
      </p>
    </div>
  );
};

export default StoryCard;
