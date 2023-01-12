<template>
  <article class="media" :class="{ 'media--featured': featured }">
    <div class="media__image-date">
      <span class="media__date">
        {{ media?.date }}
      </span>
      <div class="media__image" :class="{ video__image: video }">
        <figure>
          <img
            v-if="media?.image"
            :src="media?.image?.fullUrlThumb"
            :alt="media?.title"
          />
          <img
            v-else
            src="https://dummyimage.com/300x300.jpg"
            alt="imagen de prueba"
          />
        </figure>
      </div>
    </div>
    <div class="media__information">
      <h2 class="media__title">{{ media?.title }}</h2>
      <p class="media__description">
        {{ media?.description }}
      </p>
      <nuxt-link class="button button--full" :to="`/publicaciones/${media?.id}`"
        >Ver</nuxt-link
      >
    </div>
  </article>
</template>

<script lang="ts" setup>
import type { Media } from "types/media";

interface Props {
  media?: Media;
  featured: Boolean;
  video: Boolean;
}

const { media, featured } = defineProps<Props>();
</script>
