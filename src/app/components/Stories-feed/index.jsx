"use client";
import React from "react";
import StoryCard from "../story-card";
import { useQuery } from "react-query";
import SkeletonStoriesFeed from "../skeleton-stories-feed";

const StoriesFeed = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["stories-feed"],
    queryFn: async () =>
      await fetch(`${process.env.NEXT_URL}stories`).then((res) => res.json()),
  });
  if (isLoading) {
    return (
      <div className="flex justify-center space-x-3">
        {[...Array(5)].map((_,index) =>  <SkeletonStoriesFeed key={index}/>)}
      </div>
    )
  }
  return (
    <div className="flex justify-center space-x-3 ">
      {data?.map((item, index) => (
        <StoryCard key={index} {...item} />
      ))}
    </div>
  );
};

export default StoriesFeed;
