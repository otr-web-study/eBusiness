import { API_URL } from "~/constants/constants";
import type { Post } from "~/types/Post";

export const usePosts = async () => {
  const { pending, error, data } = await useLazyFetch<Post[]>(API_URL);

  if (error.value) {
    console.log(error);
    throw error.value;
  }

  return { posts: data, isPending: pending };
};
