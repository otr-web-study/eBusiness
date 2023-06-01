<script setup lang="ts">
const { posts, isPending } = await usePosts();

const { paginatedPosts, page, totalPages, pageRange, setPage } =
  usePaginatedPosts(posts);

const recentPosts = computed(() =>
  [...(posts.value || [])]
    .sort(
      (postA, postB) =>
        Date.parse(postA.createdAt) - Date.parse(postB.createdAt)
    )
    .slice(0, 4)
);
</script>

<template>
  <!-- ======= Blog Header ======= -->
  <div class="header-bg page-area"></div>
  <!-- End Blog Header -->
  <Spinner v-if="isPending" />
  <div v-else class="blog-page area-padding mt-4">
    <div class="container">
      <div class="row">
        <LeftSidbar :posts="recentPosts" />
        <div class="col-md-8 col-sm-8 col-xs-12">
          <div class="row">
            <Post v-for="post in paginatedPosts" :post="post" :key="post.id" />
            <Pagination
              :page="page"
              :totalPages="totalPages"
              :pageRange="pageRange"
              @page-changed="setPage"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
