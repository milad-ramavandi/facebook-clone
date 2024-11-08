"use client";
import React from "react";
import StoriesFeed from "../Stories-feed";
import InputBox from "../input-box";
import PostsFeed from "../posts-feed";

const Feed = () => {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        <StoriesFeed />
        <InputBox />
        <PostsFeed />
      </div>
    </div>
  );
};

export default Feed;
