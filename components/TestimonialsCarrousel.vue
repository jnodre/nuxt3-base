<template>
  <section class="testimonials-carrousel">
    <h2 class="testimonials-carrousel__title">Clientes y Testimonios</h2>
    <p class="testimonials-carrousel__text">
      Asimétrica se siente orgullosa de haber trabajado con decenas de
      organizaciones culturales en España resto de Europa y América Latina.
      Esperamos poder darte la bienvenida a nuestra familia de clientes.
    </p>
    <section class="testimonials-carrousel__slider-container">
      <button class="testimonials-carrousel__button" @click="moveSliderLeft()">
        <img src="~/assets/svg/arrow.svg" alt="" />
      </button>
      <div class="testimonials-carrousel__slider" id="slider">
        <article class="testimonial" v-for="(i, index) in 5" :key="index">
          <h2 class="testimonial__title">Félix Alcaraz</h2>
          <h3 class="testimonial__subtitle">
            Orquesta y Coro Nacionales de España
          </h3>
          <p class="testimonial__description">
            “Con Asimétrica hemos sido capaces de invertir la tendencia de
            caídas en los abonos que sacudía a la OCNE en los últimos años.
            Gracias a sus estrategias de desarrollo de producto y a las campañas
            de renovación y recuperación de abonados podemos mirar al futuro con
            confianza.”
          </p>
        </article>
      </div>
      <button
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

let slider: HTMLElement | null = null;
let sliderPosition: Ref<number> = ref(0);
onMounted(() => (slider = document.getElementById("slider")));

function moveSliderLeft(): void {
  if (slider !== null) {
    sliderPosition.value = sliderPosition.value + 500;
    slider.style.transform = `translateX(${sliderPosition.value}px)`;
  }
}
function moveSliderRight(): void {
  if (slider !== null) {
    console.log(slider);
    sliderPosition.value = sliderPosition.value - 500;
    slider.style.transform = `translateX(${sliderPosition.value}px)`;
  }
}
</script>
