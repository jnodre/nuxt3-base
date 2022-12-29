<template>
  <article class="team-element">
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
    <h4 class="team-element__name">Nombre Apellid</h4>
    <h5 class="team-element__job">Cargo dentro del curso</h5>
    <p class="team-element__organization">Organización</p>
    <div class="team-element__social-container">
      <a class="team-element__social-link" href=""
        ><img src="~/assets/svg/linkedin.svg" alt=""
      /></a>
      <a class="team-element__social-link" href=""
        ><img src="~/assets/svg/twitter.svg" alt=""
      /></a>
    </div>
  </article>
</template>
<script setup lang="ts">
import type { Teacher } from "types/teacher";
interface Props {
  element?: Teacher;
}

const { element } = defineProps<Props>();
</script>
