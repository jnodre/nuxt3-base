<template>
  <section class="testimonials-carrousel" v-if="testimonials.length">
    <h2 class="testimonials-carrousel__title">{{ title }}</h2>
    <p class="testimonials-carrousel__text">
      {{ description }}
    </p>
    <section class="testimonials-carrousel__slider-container">
      <button
        class="testimonials-carrousel__button"
        @click="moveSliderLeft()"
        v-if="sliderIndex > 0"
      >
        <img src="~/assets/svg/arrow.svg" alt="" />
      </button>
      <div class="testimonials-carrousel__slider" id="slider">
        <article
          class="testimonial"
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
      <button
        class="testimonials-carrousel__button testimonials-carrousel__button--rotate"
        @click="moveSliderRight()"
        v-if="
          (windowWidth >= 1600 && sliderIndex <= testimonials.length - 4) ||
          (windowWidth >= 1250 &&
            sliderIndex <= testimonials.length - 3 &&
            windowWidth < 1600)
        "
      >
        <img src="~/assets/svg/arrow.svg" alt="" />
      </button>
    </section>
    <div class="testimonials-carrousel__button-mobile-container">
      <div>
        <button
          class="testimonials-carrousel__button"
          @click="moveSliderLeft()"
          v-if="sliderIndex > 0"
        >
          <img src="~/assets/svg/arrow.svg" alt="" />
        </button>
      </div>
      <div>
        <button
          class="testimonials-carrousel__button testimonials-carrousel__button--rotate"
          @click="moveSliderRight()"
          v-if="
            (windowWidth >= 1600 && sliderIndex <= testimonials.length - 3) ||
            windowWidth >= 1250 ||
            (windowWidth < 1250 && sliderIndex < testimonials.length - 1)
          "
        >
          <img src="~/assets/svg/arrow.svg" alt="" />
        </button>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import type { Ref } from "vue";
import { Testimonials } from "types/testimonial";

interface Props {
  title?: string;
  description?: string;
  testimonials: Testimonials;
}

const { testimonials, title, description } = defineProps<Props>();

let sliderIndex: Ref<number> = ref(0);
let slider: HTMLElement | null = null;
let sliderWidth: HTMLElement | null = null;
let sliderPosition: Ref<number> = ref(0);
let windowWidth: Ref<number> = ref(0);

if (process.client) {
  window.addEventListener("resize", onResize);
}

onMounted(() => {
  slider = document.getElementById("slider");
  sliderWidth = document.getElementById("slider-width");
  windowWidth.value = window.innerWidth;
});

function onResize(): void {
  slider!.style.transform = "translateX(0px)";
  sliderIndex.value = 0;
  sliderWidth = document.getElementById("slider-width");
  sliderPosition.value = 0;
  windowWidth.value = window.innerWidth;
}

function moveSliderLeft(): void {
  if (slider !== null) {
    sliderPosition.value =
      sliderPosition.value +
      sliderWidth!.offsetWidth +
      parseInt(getComputedStyle(slider).gap.replace("px", ""));
    slider.style.transform = `translateX(${sliderPosition.value}px)`;
    sliderIndex.value--;
  }
}
function moveSliderRight(): void {
  if (slider !== null) {
    sliderPosition.value =
      sliderPosition.value -
      sliderWidth!.offsetWidth -
      parseInt(getComputedStyle(slider).gap.replace("px", ""));
    slider.style.transform = `translateX(${sliderPosition.value}px)`;
    sliderIndex.value++;
  }
}
</script>
