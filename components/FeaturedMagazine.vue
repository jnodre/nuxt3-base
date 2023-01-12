<template>
  <section class="featured-magazine">
    <h2 class="featured-magazine__title">{{ title }}</h2>
    <h3 class="featured-magazine__description">{{ description }}</h3>
    <Magazine full :magazine="magazine" />
    <div class="featured-magazine__bottom" v-if="bottom">
      <h4 class="featured-magazine__bottom-title">¿Con ganas de más?</h4>
      <nuxt-link class="button" to="/publicaciones"
        >Ir a publicaciones</nuxt-link
      >
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Magazine } from "types/magazine";

interface Props {
  title?: string;
  description?: string;
  magazine: Magazine;
  bottom: boolean;
}

const { magazine, title, description } = defineProps<Props>();
</script>
