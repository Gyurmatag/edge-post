import PostForm from "@/app/components/PostForm";
import PostList from "@/app/components/PostList";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
            <PostForm />
            <PostList />
        </main>
    );
}
