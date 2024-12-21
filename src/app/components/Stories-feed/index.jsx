"use client";
import React from "react";
import StoryCard from "../story-card";
import { useQuery } from "react-query";
import SkeletonStoriesFeed from "../skeleton-stories-feed";
// import { getStoriesFeedAction } from "@/actions";

const StoriesFeed = () => {
  // const data = await getStoriesFeedAction();
  const { data, isLoading, isError, error } = useQuery({
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
  if (isError) {
    throw new Error(error.message)
  }
  return (
    <div className="flex p-3 space-x-2 sm:space-x-3 overflow-auto scrollbar-hide">
      {data?.slice(0).reverse().map((item, index) => (
        <StoryCard key={index} {...item} />
      ))}
    </div>
  );
};

export default StoriesFeed;
