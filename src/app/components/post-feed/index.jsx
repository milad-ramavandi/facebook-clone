"use client";
import Image from "next/image";
import React from "react";
import LikeIcon from "../like-icon";
import CommentIcon from "../comment-icon";
import ShareIcon from "../share-icon";
import EllipsisVertical from "../ellipsis-vertical";
import TimeAgo from "react-timeago";
import { Avatar } from "@nextui-org/react";

const PostFeed = ({ id, author,image, uploadFile, timestamp, message }) => {
  return (
    <div
      className={
        "flex flex-col bg-white p-2 sm:p-5 shadow-md rounded-t-2xl space-y-4"
      }
    >
      <div className={"flex justify-between items-center"}>
        <div className="flex flex-grow items-center space-x-2">
          <Avatar src={image} size={'sm'} showFallback/>
          <div>
            <p className={"font-medium truncate"}>{author}</p>
            <p className={"text-xs text-gray-400"}>
              <TimeAgo date={timestamp} suppressHydrationWarning/>
            </p>
          </div>
        </div>
        <EllipsisVertical id={id} />
      </div>
      <p>{message}</p>
      {uploadFile && (
        <div className={"relative h-56 md:h-96"}>
          <Image
            src={uploadFile}
            fill
            className={"object-contain"}
            alt={author}
          />
        </div>
      )}
      <div
        className={
          "grid sm:grid-cols-3 text-gray-400 border-t pt-1"
        }
      >
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
