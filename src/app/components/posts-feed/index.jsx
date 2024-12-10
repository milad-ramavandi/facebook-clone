import { getPostsFeed, getPostsFeedAction } from "@/actions";
import PostFeed from "../post-feed";
import { Suspense } from "react";
import SkeletonPost from "../skeleton-post";
// import { useQuery } from "react-query";
// import SkeletonPost from "../skeleton-post";

const PostsFeed = async () => {
  // const { data, isLoading } = useQuery({
  //   queryKey: ["posts"],
  //   queryFn: async () => await fetch(`${process.env.NEXT_URL}posts`).then((res) => res.json())
  // });
  // if (isLoading) {
  //   return (
  //     <div className={"space-y-5"}>
  //       {[...Array(5).keys()].map(item => <SkeletonPost key={item}/>)}
  //     </div>
  //   );
  // }
  const data = await getPostsFeedAction();
  return (
    <Suspense fallback={<SkeletonPost/>}>
      <div className={"space-y-5"}>
        {data
          ?.slice(0)
          .reverse()
          .map((item, index) => (
            <PostFeed key={index} {...item} />
          ))}
      </div>
    </Suspense>
  );
};

export default PostsFeed;
