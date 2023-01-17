<template>
  <article class="event">
    <div class="event__image-container">
      <figure>
        <img
          v-if="event.image"
          :src="event.image?.fullUrlThumb"
          :alt="event.title"
        />
        <img
          v-else
          src="https://dummyimage.com/300x600.jpg"
          alt="imagen de prueba"
        />
      </figure>
    </div>
    <div class="event__information-container">
      <div class="event__date">
        <span>{{ event.date }}</span>
      </div>
      <h3 class="event__title">{{ event.title }}</h3>
      <h4 class="event__price">{{ event.price }} €</h4>
      <div class="event__description" v-html="event.entry"></div>
      <div class="event__buttons">
        <nuxt-link to="" class="button button--full button--light"
          >Saber más</nuxt-link
        >
        <nuxt-link to="" class="button button--full button--dark"
          >RESERVAR
        </nuxt-link>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { Event } from "types/event";
interface Props {
  event: Event;
}

const { event } = defineProps<Props>();
</script>
