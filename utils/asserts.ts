import type { Post } from "~/types/Post";

export function assertPost(post: Ref<Post | null>): asserts post is Ref<Post> {
  if (!post.value) {
    throw createError({ statusCode: 404, statusMessage: "Page not found" });
  }
}
