<template>
  <section class="services-container">
    <h2 class="services-container__title">Servicios</h2>
    <ServiceArticle
      v-for="(service, i) in services"
      :key="`service-${i}`"
      :service="service"
    />
  </section>
</template>
<script setup lang="ts">
const services: Object[] = [
  {
    title: "Infvestigación de públicos",
    d: "¿Cómo de importante es conocer al público en tu organización? Realizamos efstudios cualitativos y cuantitativos del público al servicio de los objetivos y la misión de cada organización",
    listImage: {
      fullUrlThumb: "https://dummyimage.com/200.jpg",
    },
  },
  {
    title: "Infvestigación de públicos",
    d: "¿Cómo de importante es conocer al público en tu organización? Realizamos efstudios cualitativos y cuantitativos del público al servicio de los objetivos y la misión de cada organización",
    listImage: {
      fullUrlThumb: "https://dummyimage.com/200.jpg",
    },
  },
  {
    title: "Infvestigación de públicos",
    d: "¿Cómo de importante es conocer al público en tu organización? Realizamos efstudios cualitativos y cuantitativos del público al servicio de los objetivos y la misión de cada organización",
    listImage: {
      fullUrlThumb: "https://dummyimage.com/200.jpg",
    },
  },
];
</script>
