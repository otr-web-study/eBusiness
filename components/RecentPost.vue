<script setup lang="ts">
import type { Post } from "@/types/Post";

const { post } = defineProps<{ post: Post }>();
</script>

<template>
  <div class="recent-single-post">
    <div class="post-img">
      <NuxtLink :to="`/posts/${post.id}`">
        <ImageWithDefault :src="post.image" :alt="post.title" />
      </NuxtLink>
    </div>
    <div class="pst-content">
      <p>
        <NuxtLink :to="`/posts/${post.id}`">{{ post.title }}</NuxtLink>
      </p>
    </div>
  </div>
</template>
