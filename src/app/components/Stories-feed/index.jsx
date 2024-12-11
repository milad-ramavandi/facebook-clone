import React from "react";
import StoryCard from "../story-card";
import { getStoriesFeedAction } from "@/actions";

const StoriesFeed = async () => {
  const data = await getStoriesFeedAction();
  return (
    <div className="flex p-1 justify-start sm:justify-center space-x-3 overflow-auto scrollbar-hide sm:overflow-visible">
      {data?.map((item, index) => (
        <StoryCard key={index} {...item} />
      ))}
    </div>
  );
};

export default StoriesFeed;
