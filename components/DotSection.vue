<template>
  <section class="dot-section">
    <h1 class="dot-section__title">{{ title }}</h1>
    <div v-html="description"></div>
  </section>
</template>
<script setup>
const props = defineProps({
  description: String,
  title: String,
});
</script>
