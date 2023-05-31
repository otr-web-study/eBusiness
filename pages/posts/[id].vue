<script setup lang="ts">
const { id } = useRoute().params;

const { post } = await useSinglePost(id as string);
</script>

<template>
  <div class="header-bg page-area"></div>

  <div class="blog-page area-padding">
    <div class="container">
      <div class="row justify-content-center">
        <!-- Start single blog -->
        <div class="col-md-8 col-sm-8 col-xs-12">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <!-- single-blog start -->
              <article class="blog-post-wrapper">
                <div class="post-thumbnail">
                  <ImageWithDefault :src="post.image" :alt="post.title" />
                </div>
                <div class="post-information">
                  <h2>{{ post.title }}</h2>
                  <div class="entry-meta">
                    <span
                      ><i class="bi bi-clock"></i
                      >{{ formatDate(post.createdAt) }}</span
                    >
                  </div>
                  <div class="entry-content">
                    <p>
                      {{ post.description }}
                    </p>
                  </div>
                </div>
              </article>
              <span>
                <NuxtLink class="ready-btn" to="/">Go back</NuxtLink>
              </span>
              <!-- single-blog end -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Blog Page -->
</template>
