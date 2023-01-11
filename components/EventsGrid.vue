<template>
  <section
    class="events-grid"
    v-if="events"
    :class="{ 'events-grid--recommended': recommended }"
  >
    <h2 class="events-grid__title">
      {{ title }}
    </h2>
    <h3 v-if="subtitle" class="events-grid__subtitle">{{ subtitle }}</h3>
    <div class="events-grid__container">
      <Event
        v-for="(event, eventIndex) in events.slice(0, loadMoreIndex)"
        :key="eventIndex"
        :event="event"
      />
    </div>
    <div class="events-grid__bottom" v-if="recommended && loadMoreIndex < 4">
      <p class="events-grid__bottom-text">Aún tenemos más</p>
      <nuxt-link to="" class="button">Ver más talleres</nuxt-link>
    </div>
    <div
      class="events-grid__bottom"
      v-if="loadMore && loadMoreIndex < events.length"
    >
      <button @click="loadMoreElements()" class="button button--dark">
        Cargar más
      </button>
    </div>
  </section>
</template>
<script setup lang="ts">
import type { Ref } from "vue";
import type { Events } from "types/event";

interface Props {
  events?: Events;
  title?: string;
  subtitle?: string;
  recommended?: boolean;
  loadMore?: boolean;
}

const { events, title, subtitle } = defineProps<Props>();

let loadMoreIndex: Ref<number> = ref(4);

function loadMoreElements(): void {
  if (loadMoreIndex.value < events.length) {
    loadMoreIndex.value = loadMoreIndex.value + 2;
  }
}
</script>
