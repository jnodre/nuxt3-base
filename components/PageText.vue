<template>
  <article class="page-text">
    <h2 class="page-text__title" v-if="title?.length">{{ title }}</h2>
    <div
      class="page-text__description"
      v-if="description"
      v-html="description"
    ></div>
  </article>
</template>
<script lang="ts" setup>
interface Props {
  title?: string;
  description?: string;
}
const { title, description } = defineProps<Props>();
</script>
