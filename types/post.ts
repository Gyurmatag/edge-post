import { User } from "@/types/user";

type Post = {
  text: string;
};

export type PostData = {
  users: User;
  posts: Post;
};
