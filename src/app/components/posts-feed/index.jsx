"use client";
import PostFeed from "../post-feed";
import { useQuery } from "react-query";
import SkeletonPost from "../skeleton-post";

const PostsFeed = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => await fetch("http://localhost:8000/posts").then((res) => res.json())  
  });
  if (isLoading) {
    return (
      <div className={"space-y-5"}>
        {[...Array(5).keys()].map(item => <SkeletonPost key={item}/>)}
      </div>
    );
  }
  return (
    <div className={'space-y-5'}>
      {data
        ?.slice(0)
        .reverse()
        .map((item, index) => (
          <PostFeed key={index} {...item} />
        ))}
    </div>
  );
};

export default PostsFeed;
