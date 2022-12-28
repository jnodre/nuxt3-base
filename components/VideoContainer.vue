<template>
  <div class="media-container media-container--video">
    <h2 class="media-container__title">{{ title }}</h2>
    <h3 class="media-container__subtitle">{{ subtitle }}</h3>
    <div class="media-container__container">
      <Video
        v-for="(video, videoIndex) in videos"
        :key="videoIndex"
        :video="video"
        :featured="videoIndex === 0 ? true : false"
      />
    </div>
    <div class="media-container__bottom">
      <p class="media-container__bottom-title">Y mucho más</p>
      <a href="https://vimeo.com/asimetrica" class="button button--sm"
        >Perfil en Vimeo</a
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Videos } from "types/video";
interface Props {
  title: string;
  subtitle?: string;
  videos?: Videos;
}

const { title, subtitle, videos } = defineProps<Props>();
</script>
