<template>
  <article class="media" :class="{ 'media--featured': featured }">
    <div class="media__image-date">
      <span class="media__date">
        {{ podcast.date }}
      </span>
      <div class="podcast__image">
        <figure>
          <img
            v-if="podcast.image"
            :src="podcast.image?.fullUrlThumb"
            :alt="podcast.title"
          />
          <img
            v-else
            src="https://dummyimage.com/300x300.jpg"
            alt="imagen de prueba"
          />
        </figure>
      </div>
    </div>
    <div class="podcast__information">
      <h2 class="podcast__title">{{ podcast.title }}</h2>
      <p class="podcast__description">{{ podcast.description }}</p>
      <nuxt-link
        class="button button--full"
        :to="`/publicaciones/${podcast.id}`"
        >Ver</nuxt-link
      >
    </div>
  </article>
</template>

<script lang="ts" setup>
import type { Podcast } from "types/podcast";

interface Props {
  podcast: Podcast;
  featured: Boolean;
}

const { podcast, featured } = defineProps<Props>();
</script>
