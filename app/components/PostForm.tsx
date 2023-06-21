'use client'

import {addPost} from "@/app/actions";
import { useRouter } from 'next/navigation'

export default function PostForm() {

    const router = useRouter()

    const handleAddPost = async (formData: FormData) => {
        await addPost(formData)
        router.refresh();
    }

    return (
        <div className="w-full max-w-xs md:max-w-md lg:max-w-lg mx-auto">
            <form action={handleAddPost} className="bg-white shadow-md rounded-lg px-4 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Name"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Your Post
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="message"
                        name="message"
                        placeholder="What's happening?"
                        required
                    ></textarea>
                </div>
                <div className="flex items-center justify-end">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-200 ease-in-out"
                        type="submit"
                    >
                        Post
                    </button>
                </div>
            </form>
        </div>
    );
}
