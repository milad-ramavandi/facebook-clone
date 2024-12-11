"use client";
import { Input } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import SearchIcon from "../search-icon";

const HeaderLeft = () => {
  return (
    <div className="flex items-center gap-2 pr-1">
      <div className="relative w-10 h-10 flex justify-center items-center">
        <Image
          src="/images/facebook-logo.webp"
          fill
          alt="facebook"
          className="object-cover"
        />
      </div>
      <div className="w-[175px] sm:w-[200px] lg:w-[250px] 2xl:w-[400px]">
        <Input
          inputMode="text"
          startContent={<SearchIcon className={'size-6 text-gray-600'}/>}
          placeholder="Search Facebook..."
        />
      </div>
    </div>
  );
};

export default HeaderLeft;
