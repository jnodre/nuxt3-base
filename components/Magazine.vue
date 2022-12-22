<template>
  <article class="magazine">
    <div class="magazine__image-container">
      <div class="magazine__date-author">
        <span>{{ magazine.date }}</span>
        <span>Asimétrica</span>
      </div>
      <figure>
        <img :src="magazine.image?.fullUrlThumb" :alt="magazine.title" />
      </figure>
    </div>
    <div class="magazine__information-container">
      <h3 class="magazine__title">{{ magazine.title }}</h3>
      <h4 class="magazine__subtitle">{{ magazine.subtitle }}</h4>
      <div class="magazine__description" v-html="magazine.description"></div>
      <nuxt-link to="" class="button button--full button--light"
        >Saber más</nuxt-link
      >
    </div>
  </article>
</template>

<script setup lang="ts">
import { Magazine } from "types/magazine";
interface Props {
  magazine: Magazine;
}

const { magazine } = defineProps<Props>();
</script>
