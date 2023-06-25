import PostItem from "./PostItem";

const getPosts = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/posts/get`,
    { next: { revalidate: 0 } }
  );
  return response.json();
};

export default async function PostList() {
  const items = await getPosts();

  return (
    <div className="mx-auto w-full max-w-xs space-y-4 md:max-w-md lg:max-w-lg">
      {items.map((postData: any, index: number) => (
        <PostItem
          key={index}
          authorName={postData.users.name}
          postText={postData.posts.text}
        />
      ))}
    </div>
  );
}
