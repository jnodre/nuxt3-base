<template>
  <div class="media-container" :class="{ 'media-container--videos': videos }">
    <h2 class="media-container__title">{{ title }}</h2>
    <h3 class="media-container__subtitle">{{ subtitle }}</h3>
    <div class="media-container__container">
      <Media
        v-for="(media, mediaIndex) in videos || podcasts"
        :key="mediaIndex"
        :media="media"
        :video="videos"
        :featured="mediaIndex === 0 ? true : false"
      />
    </div>
    <div class="media-container__bottom">
      <p class="media-container__bottom-title">Y mucho más</p>
      <a
        v-if="videos"
        href="https://vimeo.com/asimetrica"
        class="button button--sm"
        >Perfil en Vimeo</a
      >
      <a
        v-else
        href="https://asimetrica.buzzsprout.com/"
        class="button button--sm"
        >Perfil en Buzzsprout</a
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Videos } from "types/video";
import type { Podcasts } from "types/podcast";
interface Props {
  title: string;
  subtitle?: string;
  videos?: Videos;
  podcasts?: Podcasts;
}

const { title, subtitle, videos, podcasts } = defineProps<Props>();
</script>
