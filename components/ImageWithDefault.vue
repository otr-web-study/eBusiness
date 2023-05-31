<script setup lang="ts">
import { DEFAULT_POST_IMAGE } from "~/constants/constants";

const onError = (e: Event) => {
  (e.target as HTMLImageElement).src = DEFAULT_POST_IMAGE;
};
</script>

<template>
  <img @error="onError" />
</template>
