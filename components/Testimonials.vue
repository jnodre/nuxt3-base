<template>
  <section class="testimonials-carrousel">
    <h2 class="testimonials-carrousel__title" v-if="title.length">
      {{ title }}
    </h2>
    <p class="testimonials-carrousel__text" v-if="description.length">
      {{ description }}
    </p>
    <section class="testimonials-carrousel__slider-container">
      <button
        :class="{
          'testimonials-carrousel__button--sm': testimonials.length <= 3,
        }"
        class="testimonials-carrousel__button"
        @click="moveSliderLeft()"
      >
        <img src="~/assets/svg/arrow.svg" alt="" />
      </button>
      <div
        class="testimonials-carrousel__slider"
        id="slider"
        :class="{
          'testimonials-carrousel__slider--sm': testimonials.length <= 3,
        }"
      >
        <article
          class="testimonial"
          :class="{ 'testimonial--inactive': index !== activeTestimonial }"
          v-for="(i, index) in testimonials"
          :key="index"
        >
          <h2 class="testimonial__title">{{ i.title }}</h2>
          <h3 class="testimonial__subtitle">
            {{ i.subtitle }}
          </h3>
          <p class="testimonial__description">
            {{ i.description }}
          </p>
        </article>
      </div>
      <button
        :class="{
          'testimonials-carrousel__button--sm': testimonials.length <= 3,
        }"
        class="testimonials-carrousel__button testimonials-carrousel__button--rotate"
        @click="moveSliderRight()"
      >
        <img src="~/assets/svg/arrow.svg" alt="" />
      </button>
    </section>
  </section>
</template>
<script lang="ts" setup>
import type { Ref } from "vue";

const props = defineProps({
  testimonials: {
    type: Array<Object>,
    required: true,
  },
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
});

let activeTestimonial: Ref<number> = ref(0);
let slider: HTMLElement | null = null;
let testimonial: HTMLElement<Element> | null = null;
let sliderPosition: Ref<number> = ref(0);
onMounted(() => {
  (slider = document.getElementById("slider")),
    (testimonial = document.getElementsByClassName("testimonial"));
});

function moveSliderLeft(): void {
  if (slider !== null) {
    sliderPosition.value = sliderPosition.value + 500;
    slider.style.transform = `translateX(${sliderPosition.value}px)`;
  }
}
function moveSliderRight(): void {
  if (slider !== null) {
    sliderPosition.value = sliderPosition.value - 500;
    slider.style.transform = `translateX(${sliderPosition.value}px)`;
  }
}
</script>
