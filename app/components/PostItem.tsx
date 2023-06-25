interface PostItemProps {
  authorName: string;
  postText: string;
}

export default function PostItem({ authorName, postText }: PostItemProps) {
  return (
    <div className="mx-auto mb-4 w-full max-w-xs rounded-lg bg-white px-4 py-6 shadow-md md:max-w-md lg:max-w-lg">
      <h2 className="mb-2 text-xl font-bold">{authorName}</h2>
      <p className="text-base text-gray-700">{postText}</p>
    </div>
  );
}
