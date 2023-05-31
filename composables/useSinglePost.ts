import { API_URL } from "~/constants/constants";
import type { Post } from "~/types/Post";

export const useSinglePost = async (id: string) => {
  const { data } = await useFetch<Post>(`${API_URL}${id}`);

  assertPost(data);

  return { post: data };
};
