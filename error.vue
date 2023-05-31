<script setup lang="ts">
import { NuxtError } from "nuxt/app";

const { error } = defineProps<{ error: NuxtError }>();

const handleClearError = () => clearError({ redirect: "/" });
</script>

<template>
  <div
    class="d-flex flex-column justify-content-center align-items-center vh-100"
  >
    <h1
      class="fw-bold"
      :style="{ 'font-size': '150px', 'line-height': '155px' }"
    >
      {{ error.statusCode }}
    </h1>
    <p class="mt2 fw-medium fs-2">Ooops.</p>
    <p class="mt2">{{ error.message }}</p>
    <button class="btn btn-info mt-5" @click="handleClearError">
      Go home...
    </button>
  </div>
</template>
