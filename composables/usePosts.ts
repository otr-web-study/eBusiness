import { API_URL } from "~/constants/constants";
import type { Post } from "~/types/Post";

export const usePosts = async () => {
  const posts = useState<Post[]>("posts", () => []);
  const isPending = useState<boolean>("posts_pending", () => false);

  if (!posts.value.length) {
    const { pending, error, data } = await useFetch<Post[]>(API_URL);

    posts.value = data.value ?? [];
    isPending.value = pending.value;

    if (error.value) {
      console.log(error);
      throw error.value;
    }
  }

  return { posts, isPending };
};
