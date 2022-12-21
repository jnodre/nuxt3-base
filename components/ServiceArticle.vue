<template>
  <article class="service-article">
    <div class="service-article__icon">
      <template v-if="service.listImage">
        <img
          :src="service.listImage.url"
          alt=""
          :srcset="`${service.listImage.url} 1x,${service.listImage.url} 2x`"
        />
      </template>
    </div>
    <h2 class="service-article__title">{{ service.title }}</h2>
    <p class="service-article__description">
      {{ service.description }}
    </p>
    <nuxt-link to="" class="button">Saber más</nuxt-link>
  </article>
</template>
<script setup>
const props = defineProps({
  service: Object,
});
</script>
