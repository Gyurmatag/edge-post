import PostItem from "./PostItem";
import { PostData } from "@/types/post";

interface PostListProps {
  postList: PostData[];
}

export default async function PostList({ postList }: PostListProps) {
  return (
    <div className="mx-auto w-full max-w-xs space-y-4 md:max-w-md lg:max-w-lg">
      {postList.map((postData, index) => (
        <PostItem
          key={index}
          authorName={postData.users.name}
          postText={postData.posts.text}
        />
      ))}
    </div>
  );
}
