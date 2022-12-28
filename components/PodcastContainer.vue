<template>
  <div class="media-container">
    <h2 class="media-container__title">{{ title }}</h2>
    <h3 class="media-container__subtitle">{{ subtitle }}</h3>
    <div class="media-container__container">
      <Podcast
        v-for="(podcast, podcastIndex) in podcasts"
        :key="podcastIndex"
        :podcast="podcast"
        :featured="podcastIndex === 0 ? true : false"
      />
    </div>
    <div class="media-container__bottom">
      <p class="media-container__bottom-title">Y mucho más</p>
      <a href="https://asimetrica.buzzsprout.com/" class="button button--sm"
        >Perfil en Buzzsprout</a
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Podcasts } from "types/podcast";
interface Props {
  title: string;
  subtitle?: string;
  podcasts?: Podcasts;
}

const { title, subtitle, podcasts } = defineProps<Props>();
</script>
