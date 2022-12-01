<template>
  <header class="page-header">
    <h1 class="page-header__title">{{ title }}</h1>
    <h2 class="page-header__subtitle">{{ subtitle }}</h2>
    <div class="page-header__image-container">
      <img
        :src="image.url"
        alt=""
        :srcset="`${image.url} 1x,${image.url} 2x`"
      />
    </div>
  </header>
</template>
<script setup>
const props = defineProps({
  title: String,
  subtitle: String,
  image: Object,
});
</script>
