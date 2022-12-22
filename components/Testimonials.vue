<template>
  <section
    class="testimonials-carrousel testimonials-carrousel--no-slider"
    v-if="testimonials.length"
  >
    <h2 class="testimonials-carrousel__title">{{ title }}</h2>
    <p class="testimonials-carrousel__text">
      {{ description }}
    </p>
    <section
      class="testimonials-carrousel__slider-container testimonials-carrousel__slider-container--no-slider"
    >
      <div
        class="testimonials-carrousel__slider testimonials-carrousel__slider--no-slider"
        id="slider"
      >
        <article
          class="testimonial testimonial--no-slider"
          v-for="(testimonial, index) in testimonials"
          :key="index"
          :id="index === 0 ? 'slider-width' : ''"
        >
          <h2 class="testimonial__title">{{ testimonial.name }}</h2>
          <h3 class="testimonial__subtitle">
            {{ testimonial.company }}
          </h3>
          <p
            class="testimonial__description"
            v-html="testimonial.description"
          ></p>
        </article>
      </div>
    </section>
  </section>
</template>
<script lang="ts" setup>
import { Testimonials } from "types/testimonial";

interface Props {
  description: string;
  testimonials: Testimonials;
}

const { testimonials, description } = defineProps<Props>();
</script>
