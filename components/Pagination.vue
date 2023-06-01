<script setup lang="ts">
const { page, totalPages, pageRange } = defineProps<{
  page: number;
  totalPages: number;
  pageRange: number[];
}>();

const emits = defineEmits<{ (e: "page-changed", val: number): void }>();

const pageRef = ref(page);

const handleClick = (currPage: number) => {
  emits("page-changed", currPage);
};
</script>

<template>
  <div v-if="totalPages > 1" class="blog-pagination">
    <ul class="pagination">
      <li v-if="page > 1" class="page-item">
        <NuxtLink
          :to="{ path: '/', query: { page: page - 1 } }"
          class="page-link"
          @click="handleClick(page - 1)"
          >&lt;</NuxtLink
        >
      </li>
      <li
        v-for="currPage in pageRange"
        :key="currPage"
        class="page-item"
        :class="{ active: currPage === page }"
      >
        <NuxtLink
          :to="{ path: '/', query: { page: currPage } }"
          class="page-link"
          @click="handleClick(currPage)"
          >{{ currPage }}</NuxtLink
        >
      </li>
      <li v-if="page < totalPages" class="page-item">
        <NuxtLink
          :to="{ path: '/', query: { page: page + 1 } }"
          class="page-link"
          @click="handleClick(page + 1)"
          >&gt;</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>
