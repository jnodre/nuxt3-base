<!-- <template>
  <section class="services-container">
    <h2 class="services-container__title">{{ title }}</h2>
    <ServiceArticle
      v-for="(service, i) in services.data"
      :key="`service-${i}`"
      :service="service"
    />
  </section>
</template>
<script setup lang="ts">
const services = useFetch(
  "https://api.asimetrica.abanico.net/api/services"
).then();

interface Props {
  title?: string;
}

const { title } = defineProps<Props>();
</script> -->

<!--TODO reemplazar por lo comentado si viene de API, borrar si es contenido estático-->

<template>
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

}

const {  title } = defineProps<Props>();

const services: Object[] = [
  {
    title: "Investigación de públicos",
    description:
      "¿Cómo de importante es conocer al público en tu organización? Realizamos estudios cualitativos y cuantitativos del público al servicio de los objetivos y la misión de cada organización",
    link: "/servicios/investigacion-de-publico",
    listImage: {
      url: "/svg/investigacion-publicos.svg",
    },
  },
  {
    title: "Marketing relacional",
    description:
      "Ponemos en uso las bases de datos de los usuarios y preparamos estrategias personalizadas de comunicación para mantener e incrementar tu público de forma sostenible.",
    link: "/servicios/marketing-relacional",
    listImage: {
      url: "/svg/marketing-relacional.svg",
    },
  },
  {
    title: "Plan de públicos",
    description:
      "Preparamos y asesoramos a las organizaciones culturales sobre planes de públicos desde el punto estratégico, incluyendo objetivos e indicadores, capacitación de los equipos y asesoramiento sobre los recursos necesarios.",
    link: "/servicios/planes-gestion-publicos",
    listImage: {
      url: "/svg/plan-publicos.svg",
    },
  },
  {
    title: "Experiencia del usuario",
    description:
      "Cada contacto con el público es una oportunidad para mejorar. Diseñamos la experiencia del usuario online y offline, analizando comunicaciones, protocolos y políticas de atención personal, recorridos, promociones y servicios.",
    link: "/servicios/experiencia-del-usuario",
    listImage: {
      url: "/svg/experiencia-usuario.svg",
    },
  },
  {
    title: "Training y Formación",
    description:
      "Ofrecemos talleres, sesiones teóricas y metodologías prácticas para las organizaciones que quieran saber más sobre públicos de la cultura y hacer un uso efectivo de los datos.",
    link: "/servicios/formacion",
    listImage: {
      url: "/svg/training-formacion.svg",
    },
  },
];
</script>
