import { POST_PER_PAGE } from "~/constants/constants";
import type { Post } from "~/types/Post";

export const usePaginatedPosts = (posts: Post[]) => {
  const { page } = useRoute().query || "1";
  const numberPage = +(page as string);
};
