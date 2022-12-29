<template>
  <section class="dot-section">
    <h1 class="dot-section__title" v-if="title">{{ title }}</h1>
    <div v-html="description" v-if="description"></div>
  </section>
</template>
<script setup lang="ts">
interface Props {
  title?: string;
  description?: string;
}

const { title, description } = defineProps<Props>();
</script>
