<template>
  <nav>
    <ul>
      <li>
        <nuxt-link to="/">Asimétrica</nuxt-link>

        >
      </li>
      <li>
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
