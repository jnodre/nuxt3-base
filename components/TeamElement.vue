<template>
  <article class="team-element" v-if="element">
    <figure class="team-element__image-container">
      <img
        class="team-element__image"
        v-if="element?.image"
        :src="element?.image?.fullUrlThumb"
        :alt="element?.title"
      />
      <img
        class="team-element__image"
        v-else
        src="https://dummyimage.com/300x300.jpg"
        alt="imagen de prueba"
      />
    </figure>
    <h4 class="team-element__name" v-if="element.name">{{ element.name }}</h4>
    <h5 class="team-element__job" v-if="element.job">{{ element.job }}</h5>
    <p class="team-element__organization" v-if="element.company">
      {{ company }}
    </p>
    <div class="team-element__social-container">
      <a
        class="team-element__social-link"
        :href="element.linkedin"
        v-if="element.linkedin"
        ><img src="~/assets/svg/linkedin.svg" alt=""
      /></a>
      <a
        class="team-element__social-link"
        v-if="element.twitter"
        :href="element.twitter"
        ><img src="~/assets/svg/twitter.svg" alt=""
      /></a>
    </div>
  </article>
</template>
<script setup lang="ts">
import type { Teacher } from "types/teacher";
interface Props {
  element?: Teacher;
  company?: string;
}

const { element, company } = defineProps<Props>();
</script>
