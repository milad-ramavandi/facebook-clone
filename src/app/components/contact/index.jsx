'use client'
import { Badge } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const Contact = ({ src, name }) => {
  return (
    <div className="flex items-center space-x-3 mb-2 p-2 hover:bg-gray-200 cursor-pointer rounded-xl">
      <Badge content='' color={'success'} placement="bottom-right">
        <div className={"relative w-12 h-12"}>
          <Image
            src={src}
            fill
            alt={name}
            className={"object-cover rounded-full"}
          />
        </div>
      </Badge>
      <p className="whitespace-nowrap">{name}</p>
    </div>
  );
};

export default Contact;
