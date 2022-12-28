<template>
  <section class="next-event">
    <div class="next-event__text">
      <h2 class="next-event__title">¿Qué tenemos próximamente?</h2>
      <p class="next-event__subtitle">Conoce los próximos talleres.</p>
      <nuxt-link class="button button--full" to=""
        >Ver todos los talleres</nuxt-link
      >
    </div>
    <div class="next-event__event">
      <Event :event="event" />
    </div>
  </section>
</template>
<script setup lang="ts">
import type { Event } from "types/event";

interface Props {
  event: Event;
}

const { event } = defineProps<Props>();
</script>
