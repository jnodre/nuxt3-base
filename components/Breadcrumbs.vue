<template>
  <nav class="breadcrumbs">
    <ul class="breadcrumbs__list">
      <li class="breadcrumbs__element">
        <nuxt-link to="/">Asimétrica</nuxt-link>

        >
      </li>
      <li class="breadcrumbs__element">
        <nuxt-link to="/">{{ link }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts" setup>
import type { Ref } from "vue";
const props = defineProps({
  link: String,
});
</script>
