"use client";
import Image from "next/image";
import React from "react";

const PreviewFile = ({ file, author, ref, videoRef }) => {
  return (
    <div className={"relative h-56 md:h-96"} ref={ref}>
      {file.startsWith("data:image") ? (
        <Image
          src={file}
          fill
          className={"object-contain"}
          alt={author}
        />
      ) : (
        <video
          ref={videoRef}
          src={file}
          className="w-3/4 mx-auto h-full object-cover"
          loop
          autoPlay
          muted
          controls
        />
      )}
    </div>
  );
};

export default PreviewFile;
