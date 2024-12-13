"use client";
import React from "react";
import StoryCard from "../story-card";
import { useQuery } from "react-query";
import SkeletonStoriesFeed from "../skeleton-stories-feed";
// import { getStoriesFeedAction } from "@/actions";

const StoriesFeed = () => {
  // const data = await getStoriesFeedAction();
  const { data, isLoading } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      return await fetch(`${process.env.DATABASE_URL}stories`).then((res) =>
        res.json()
      );
    },
  });

  if (isLoading) {
    return <SkeletonStoriesFeed />;
  }
  return (
    <div className="flex p-1 justify-start sm:justify-center space-x-2 sm:space-x-3 overflow-auto scrollbar-hide sm:overflow-visible">
      {data?.map((item, index) => (
        <StoryCard key={index} {...item} />
      ))}
    </div>
  );
};

export default StoriesFeed;
