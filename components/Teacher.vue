<template>
  <section class="teacher" v-if="teacher">
    <div class="teacher__information">
      <figure class="teacher__image">
        <img
          v-if="teacher.data.image"
          :src="teacher.data.image?.fullUrlThumb"
          :alt="teacher.data.title"
        />
        <img
          v-else
          src="https://dummyimage.com/300x300.jpg"
          alt="imagen de prueba"
        />
      </figure>
      <div class="teacher__data">
        <h1 class="teacher__name">{{ teacher.data.name }}</h1>
        <h2 class="teacher__job">{{ teacher.data.job }}</h2>
        <h3 class="teacher__company">{{ teacher.data.company }}</h3>
        <div class="teacher__social-container">
          <a class="teacher__social-link" href=""
            ><img :src="teacher.data.linkedin" alt=""
          /></a>
          <a class="teacher__social-link" href=""
            ><img :src="teacher.data.twitter" alt=""
          /></a>
        </div>
      </div>
    </div>
    <div class="teacher__description">
      <p>
        Raúl es un apasionado de la investigación en los cambios de
        comportamiento en el público de las artes. Con experiencia en los
        sectores de la música, las artes escénicas y visuales, decide en 2010
        unirse a varios profesionales y expertos para poner en marcha
        ASIMÉTRICA, una consultora especializada en gestión cultural, marketing
        y desarrollo de audiencias para organizaciones culturales.
      </p>
      <p>
        Desde entonces ha trabajado en conectar las artes con las personas con
        clientes como el Ministerio de Cultura español, la Berklee College of
        Music, la Orquesta y Coro Nacionales de España, el Museo Reina Sofía, el
        Teatro Nacional Colón de Bogotá, los Teatros del Canal, la Red Española
        de Teatros entre otros.
      </p>
    </div>
  </section>
</template>
<script setup lang="ts">
import { Teacher } from "types/teacher";

const route = useRoute();

const { data: teacher } = useFetch<any>(
  `https://api.asimetrica.abanico.net/api/teachers/${route.params.id}`
);
</script>
