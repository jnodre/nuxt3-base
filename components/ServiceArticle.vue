<template>
  <article>
    <img
      :src="service.listImage.url"
      alt=""
      :srcset="`${service.listImage.url} 1x,${service.listImage.url} 2x`"
    />
    <h2>{{ service.title }}</h2>
    <p>
      {{ service.description }}
    </p>
    <nuxt-link to=""></nuxt-link>
  </article>
</template>
<script setup>
const props = defineProps({
  service: Object,
});
</script>
