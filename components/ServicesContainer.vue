<template v-if="services.length">
  <h2 class="services-container-title">{{ title }}</h2>
  <section class="services-container">
    <ServiceArticle
      v-for="(service, i) in services"
      :key="`service-${i}`"
      :service="service"
    />
  </section>
</template>
<script setup lang="ts">
interface Props {
  title?: string;
  services?: [];
  //TODO añadir type
}

const { title, services } = defineProps<Props>();

// const services: Object[] = [
//   {
//     title: "Investigación de públicos",
//     description:
//       "Realizamos estudios cualitativos y cuantitativos del público al servicio de los objetivos y misión de cada organización.",
//     link: "/servicios/investigacion-de-publico",
//     listImage: {
//       url: "/svg/investigacion-publicos.svg",
//     },
//   },
//   {
//     title: "Marketing relacional",
//     description:
//       "Ponemos en uso las bases de datos de los usuarios y preparamos estrategias personalizadas de comunicación para mantener e incrementar tu público de forma sostenible.",
//     link: "/servicios/marketing-relacional",
//     listImage: {
//       url: "/svg/marketing-relacional.svg",
//     },
//   },
//   {
//     title: "Plan de públicos",
//     description:
//       "Preparamos y asesoramos a las organizaciones culturales sobre planes de públicos desde el punto estratégico, incluyendo objetivos e indicadores, capacitación de los equipos y asesoramiento sobre los recursos necesarios.",
//     link: "/servicios/planes-gestion-publicos",
//     listImage: {
//       url: "/svg/plan-publicos.svg",
//     },
//   },
//   {
//     title: "Experiencia del usuario",
//     description:
//       "Diseñamos la experiencia del usuario online y offline, analizando cada secuencia de comunicación, contenido, política de  datos, recorrido, promoción y/o servicio.",
//     link: "/servicios/experiencia-del-usuario",
//     listImage: {
//       url: "/svg/experiencia-usuario.svg",
//     },
//   },
//   // {
//   //   title: "Training y Formación",
//   //   description:
//   //     "Ofrecemos talleres, sesiones teóricas y metodologías prácticas para las organizaciones que quieran saber más sobre públicos de la cultura y hacer un uso efectivo de los datos.",
//   //   link: "/servicios/formacion",
//   //   listImage: {
//   //     url: "/svg/training-formacion.svg",
//   //   },
//   // },
// ];
</script>
