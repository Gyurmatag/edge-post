import dynamic from "next/dynamic";
import PostList from "@/app/components/PostList";

const PostForm = dynamic(() => import("@/app/components/PostForm"), {
  ssr: false,
});

export const runtime = "edge";

const getPosts = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/posts/get`,
    { cache: "no-store" },
  );
  return response.json();
};

export default async function Home() {
  const postList = await getPosts();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <PostForm />
      <PostList postList={postList} />
    </main>
  );
}
