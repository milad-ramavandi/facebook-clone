"use client";
import { Input } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import SearchIcon from "../search-icon";

const HeaderLeft = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-10 h-10 flex justify-center items-center">
        <Image
          src="https://links.papareact.com/5me"
          fill
          alt="facebook"
          className="object-cover"
          unoptimized
        />
      </div>
      <div className="hidden md:inline-flex">
        <Input
          inputMode="text"
          size="sm"
          startContent={<SearchIcon className={'size-6 text-gray-600'}/>}
          placeholder="Search Facebook"
        />
      </div>
    </div>
  );
};

export default HeaderLeft;
