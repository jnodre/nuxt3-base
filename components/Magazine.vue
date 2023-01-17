<template>
  <article class="magazine">
    <div class="magazine__image-container">
      <div class="magazine__date-author">
        <span>{{ magazine.date }}</span>
        <!--TODO meter id - slug de autor-->
        <span
          ><nuxt-link :to="`/publicaciones/slug/${magazine.id}`"
            >Asimétrica</nuxt-link
          ></span
        >
      </div>
      <figure>
        <img :src="magazine.image?.fullUrlThumb" :alt="magazine.title" />
      </figure>
    </div>
    <div class="magazine__information-container">
      <h2 class="magazine__title">{{ magazine.title }}</h2>
      <h3 class="magazine__subtitle">{{ magazine.subtitle }}</h3>
      <div class="magazine__description" v-html="magazine.entry"></div>
      <!--TODO colocar slug-id en enlace cuando venga de API-->
      <nuxt-link
        v-if="full"
        :to="`/publicaciones/conectando-audiencias/slug/2`"
        class="button button--full button--light"
        >Saber más</nuxt-link
      >
    </div>
  </article>
</template>

<script setup lang="ts">
import { Magazine } from "types/magazine";
interface Props {
  magazine: Magazine;
  full: boolean;
}

const { magazine } = defineProps<Props>();
</script>
