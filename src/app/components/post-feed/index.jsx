"use client";
import Image from "next/image";
import React, { useRef } from "react";
import LikeIcon from "../icons/like-icon";
import CommentIcon from "../icons/comment-icon";
import ShareIcon from "../icons/share-icon";
import EllipsisVertical from "../ellipsis-vertical";
import TimeAgo from "react-timeago";
import { Avatar } from "@nextui-org/react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const PostFeed = ({ _id, author, image, uploadFile, timestamp, message }) => {
  const { ref, inView } = useInView();
  const videoRef = useRef(null);
  useEffect(() => {
    inView ? videoRef?.current?.play() : videoRef?.current?.pause();
  }, [inView]);

  return (
    <div
      className={
        "flex flex-col bg-white p-2 sm:p-5 shadow-md rounded-t-2xl space-y-4"
      }
      ref={ref}
    >
      <div className={"flex justify-between items-center"}>
        <div className="flex flex-grow items-center space-x-2">
          <Avatar src={image} size={"sm"} showFallback />
          <div>
            <p className={"font-medium truncate"}>{author}</p>
            <p className={"text-xs text-gray-400"}>
              <TimeAgo date={timestamp} suppressHydrationWarning />
            </p>
          </div>
        </div>
        <EllipsisVertical id={_id} author={author} />
      </div>
      <p>{message}</p>
      {uploadFile && (
        <div className={"relative h-56 md:h-96"}>
          {uploadFile.startsWith("data:image") ? (
            <Image
              src={uploadFile}
              fill
              className={"object-contain"}
              alt={author}
            />
          ) : (
            <video
              ref={videoRef}
              src={uploadFile}
              className="w-full h-full object-contain"
              loop
              autoPlay
              muted
              controls
            />
          )}
        </div>
      )}
      <div className={"grid sm:grid-cols-3 text-gray-400 border-t pt-1"}>
        <div className={"inputIcon"}>
          <LikeIcon />
          <p className={"text-xs sm:text-base"}>Like</p>
        </div>
        <div className={"inputIcon"}>
          <CommentIcon />
          <p className={"text-xs sm:text-base"}>Comment</p>
        </div>
        <div className={"inputIcon"}>
          <ShareIcon />
          <p className={"text-xs sm:text-base"}>Share</p>
        </div>
      </div>
    </div>
  );
};

export default PostFeed;
