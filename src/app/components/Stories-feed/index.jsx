"use client";
import React from "react";
import StoryCard from "../story-card";
import { useQuery } from "react-query";
import SkeletonStoriesFeed from "../skeleton-stories-feed";

const StoriesFeed = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["stories feed"],
    queryFn: async () =>
      await fetch("http://localhost:8000/stories").then((res) => res.json()),
  });
  return (
    <>
    <div className="flex justify-center space-x-3">
      {data?.map((item, index) => (
        <StoryCard key={index} {...item} />
      ))}
    </div>
    {isLoading && <SkeletonStoriesFeed/>}
    </>
  );
};

export default StoriesFeed;
