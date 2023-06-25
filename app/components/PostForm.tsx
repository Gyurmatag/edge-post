"use client";

import { useRouter } from "next/navigation";
import { addPost } from "@/app/actions";

export default function PostForm() {
  const router = useRouter();

  const handleAddPost = async (formData: FormData) => {
    await addPost(formData);
    router.refresh();
  };

  return (
    <div className="mx-auto w-full max-w-xs md:max-w-md lg:max-w-lg">
      <form
        action={handleAddPost}
        className="mb-4 rounded-lg bg-white px-4 pb-8 pt-6 shadow-md"
      >
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded-lg border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="message"
          >
            Your Post
          </label>
          <textarea
            className="focus:shadow-outline w-full appearance-none rounded-lg border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="message"
            name="message"
            placeholder="What's happening?"
            required
          />
        </div>
        <div className="flex items-center justify-end">
          <button
            className="focus:shadow-outline rounded-lg bg-blue-500 px-4 py-2 font-bold text-white transition-colors duration-200 ease-in-out hover:bg-blue-700 focus:outline-none"
            type="submit"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
}
