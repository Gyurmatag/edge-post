interface PostItemProps {
    authorName: string;
    postText: string;
}

export default function PostItem({ authorName, postText }: PostItemProps) {
    return (
        <div className="bg-white shadow-md rounded-lg px-4 py-6 mb-4 w-full max-w-xs md:max-w-md lg:max-w-lg mx-auto">
            <h2 className="font-bold text-xl mb-2">{authorName}</h2>
            <p className="text-gray-700 text-base">{postText}</p>
        </div>
    );
}
