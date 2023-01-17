<template>
  <section
    class="magazine-grid"
    v-if="magazines"
    :class="{ 'magazine-grid--recommended': recommended }"
  >
    <h2 class="magazine-grid__title">
      {{ title }}
    </h2>
    <h3 v-if="subtitle" class="magazine-grid__subtitle">{{ subtitle }}</h3>
    <div class="magazine-grid__container">
      <Magazine
        v-for="(magazine, magazineIndex) in magazines.slice(0, loadMoreIndex)"
        :key="magazineIndex"
        :magazine="magazine"
      />
    </div>
    <div class="magazine-grid__bottom" v-if="recommended && loadMoreIndex >= 4">
      <p class="magazine-grid__bottom-text">Y mucho más</p>
      <nuxt-link to="/publicaciones/conectando-audiencias" class="button"
        >Ver más</nuxt-link
      >
    </div>
    <div
      class="magazine-grid__bottom"
      v-if="loadMore && loadMoreIndex < magazines.length"
    >
      <button @click="loadMoreElements()" class="button button--dark">
        Cargar más
      </button>
    </div>
  </section>
</template>
<script setup lang="ts">
import type { Ref } from "vue";
import type { Magazines } from "types/magazine";

interface Props {
  magazines?: Magazines;
  title?: string;
  subtitle?: string;
  recommended?: boolean;
  loadMore?: boolean;
}

const { magazines, title, subtitle } = defineProps<Props>();

let loadMoreIndex: Ref<number> = ref(4);

function loadMoreElements(): void {
  if (loadMoreIndex.value < magazines.length) {
    loadMoreIndex.value = loadMoreIndex.value + 2;
  }
}
</script>
