<script setup lang="ts">
import type { Post } from "~/types/Post";

const { posts } = defineProps<{ posts: Post[] }>();
</script>

<template>
  <!-- Start left sidebar -->
  <div class="col-lg-4 col-md-4">
    <div class="page-head-blog">
      <div class="single-blog-page">
        <!-- recent start -->
        <div class="left-blog">
          <h4>recent post</h4>
          <div class="recent-post">
            <!-- start single post -->
            <RecentPost v-for="post in posts" :key="post.id" :post="post" />
            <!-- End single post -->
          </div>
        </div>
        <!-- recent end -->
      </div>
    </div>
  </div>
  <!-- End left sidebar -->
</template>
