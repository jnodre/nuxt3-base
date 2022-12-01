<template>
  <section class="dot-section" v-html="description"></section>
</template>
<script setup>
const props = defineProps({
  description: String,
});
</script>
