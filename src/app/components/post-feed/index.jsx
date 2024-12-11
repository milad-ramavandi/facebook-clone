"use client";
import Image from "next/image";
import React from "react";
import Profile from "../profile";
import LikeIcon from "../like-icon";
import CommentIcon from "../comment-icon";
import ShareIcon from "../share-icon";
import EllipsisVertical from "../ellipsis-vertical";
import TimeAgo from "react-timeago";

const PostFeed = ({ id, author, uploadFile, timestamp, message }) => {
  return (
    <div
      className={
        "flex flex-col bg-white p-5 shadow-md rounded-t-2xl space-y-4"
      }
    >
      <div className={"flex justify-between items-center"}>
        <div className="flex items-center space-x-2">
          <Profile className={"w-12 h-12"} />
          <div>
            <p className={"font-medium"}>{author}</p>
            <div className={"text-xs text-gray-400"}>
              <TimeAgo date={timestamp}/>
            </div>
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
          "flex justify-between items-center text-gray-400 border-t pt-1"
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
