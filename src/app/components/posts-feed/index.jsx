'use client'
import { useQuery } from "react-query";
// import { getPostsFeedAction } from "@/actions";
import PostFeed from "../post-feed";
import SkeletonPosts from "../skeleton-posts";

const PostsFeed = () => {
  // const data = await getPostsFeedAction();
  const {data, isLoading} = useQuery({
    queryKey:["posts"],
    queryFn: async () => await fetch(`${process.env.DATABASE_URL}posts`).then((res) =>
      res.json()
    )
  })
  if (isLoading) {
    return <SkeletonPosts/>
  }
  return (
    <div className={"space-y-5"}>
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
