<template>
  <section class="magazine-item">
    <h2 class="magazine-item__title">{{ title }}</h2>
    <h3 class="magazine-item__description">{{ description }}</h3>
    <Magazine :magazine="magazine" full />
    <button @click="openModal()" class="button button--dark">Descargar</button>
    <p class="magazine-item__download">
      Este recurso ha sido descargado XX veces.
    </p>
  </section>
  <Modal
    title="CA 17 - Escuchando a la audiencia"
    description="Rellena el siguiente formulario para descargarte el recurso."
    active
  >
    <form action="" class="newsletter-form">
      <div class="input-container">
        <label class="input-container__label" for="name">Nombre</label>
        <input
          class="input-container__input"
          type="text"
          name="name"
          id="name"
          placeholder="Nombre"
        />
      </div>

      <div class="input-container">
        <label class="input-container__label" for="email"
          >Correo electrónico</label
        >
        <input
          class="input-container__input"
          type="text"
          name="email"
          id="email"
          placeholder="Email"
        />
      </div>

      <div class="checkbox-container">
        <input
          class="checkbox-container__checkbox"
          type="checkbox"
          name="privacy"
          id="privacy"
        />
        <label for="privacy" class="checkbox-container__label"
          >He leído y acepto la
          <nuxt-link to="/politica-de-privacidad"
            >política de privacidad</nuxt-link
          ></label
        >
      </div>
      <div></div>
      <button class="button button--full">Descargar recurso</button>
    </form></Modal
  >
</template>

<script setup lang="ts">
import type { Magazine } from "types/magazine";

interface Props {
  title?: string;
  description?: string;
  magazine: Magazine;
  bottom: Boolean;
}

const { magazine, title, description } = defineProps<Props>();
</script>
