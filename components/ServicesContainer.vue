<template>
  <section>
    <h2>Servicios</h2>
    <ServiceArticle
      v-for="(service, i) in services"
      :key="`service-${i}`"
      :service="service"
    />
  </section>
</template>
<script setup>
const services = [
  {
    title: "Investigación de públicos",
    subtitle:
      "¿Cómo de importante es conocer al público en tu organización? Realizamos estudios cualitativos y cuantitativos del público al servicio de los objetivos y la misión de cada organización",
    listImage: {
      fullUrlThumb: "https://dummyimage.com/200.jpg",
    },
  },
];
</script>
