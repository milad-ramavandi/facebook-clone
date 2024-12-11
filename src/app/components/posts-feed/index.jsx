import { getPostsFeedAction } from "@/actions";
import PostFeed from "../post-feed";

const PostsFeed = async () => {
  const data = await getPostsFeedAction();
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
