<script setup lang="ts">
import type { Post } from "@/types/Post";

const { post } = defineProps<{ post: Post }>();
</script>

<template>
  <div class="col-md-12 col-sm-12 col-xs-12">
    <div class="single-blog">
      <div class="single-blog-img">
        <NuxtLink :to="`/posts/${post.id}`">
          <ImageWithDefault :src="post.image" :alt="post.title" />
        </NuxtLink>
      </div>
      <div class="blog-meta">
        <span class="date-type">
          <i class="bi bi-calendar"></i>{{ formatDate(post.createdAt) }}
        </span>
      </div>
      <div class="blog-text">
        <h4>
          <NuxtLink :to="`/posts/${post.id}`">{{ post.title }}</NuxtLink>
        </h4>
        <p>
          {{ post.preview }}
        </p>
      </div>
      <span>
        <NuxtLink :to="`/posts/${post.id}`" class="ready-btn"
          >Read more</NuxtLink
        >
      </span>
    </div>
  </div>
</template>
