"use client";
import PostFeed from "../post-feed";
import { useQuery } from "react-query";
import SkeletonPost from "../skeleton-post";
import { Spinner } from "@nextui-org/react";

const PostsFeed = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: async () =>
      await fetch("http://localhost:8000/posts").then((res) => res.json()),
  });
  if (isLoading) {
    return (
      <div className={"space-y-6"}>
        <SkeletonPost />
        <div className={"flex justify-center"}>
          <Spinner size="lg" color="default" />
        </div>
      </div>
    );
  }
  return (
    <>
      {data
        ?.slice(0)
        .reverse()
        .map((item, index) => (
          <PostFeed key={index} {...item} />
        ))}
    </>
  );
};

export default PostsFeed;
