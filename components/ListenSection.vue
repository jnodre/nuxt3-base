<template>
  <section class="listen-section" v-if="testimonials?.length">
    <h2 class="listen-section__title">{{ title }}</h2>
    <section class="listen-section__slider-container">
      <div class="listen-section__slider">
        <article
          class="listen"
          v-for="(testimonial, index) in testimonials"
          :key="index"
        >
          <img
            class="listen__icon"
            :src="testimonial.image"
            alt="testimonial.name"
          />
          <h2 class="listen__title">{{ testimonial.name }}</h2>
          <h3 class="listen__subtitle">
            {{ testimonial.company }}
          </h3>
          <p class="listen__description" v-html="testimonial.description"></p>
        </article>
      </div>
    </section>
  </section>
</template>
<script lang="ts" setup>
interface Props {
  title?: string;
  description?: string;
}

const { title, description } = defineProps<Props>();

const testimonials = [
  {
    name: "1. El comienzo",
    description:
      "<strong>Conectando Audiencias</strong> nace en Madrid en <strong>2011</strong> con una idea central muy sencilla: ser útiles para cualquier persona interesada en la formación de públicos, el marketing de las artes y la gestión cultural. Proveer recursos, herramientas e inspiración práctica con una publicación que tuviese los mejores casos a nivel mundial y fuese totalmente independiente y gratuita.",
    image: "/svg/start.svg",
  },
  {
    name: "2. Excuse me?",
    description:
      "Por aquel entonces la inmensa parte de la literatura especializada en desarrollo de públicos estaba en inglés, y buscábamos hacer accesible a profesionales de España y América Latina los mejores contenidos, sin la barrera del idioma. Y así hicimos. En 2016, debido al éxito de la publicación en el continente americano, publicamos la <strong>primera edición de América Latina</strong>, dirigida por Javier Ibacache.",
    image: "/svg/language.svg",
  },
  {
    name: "3. Socios internacionales",
    description:
      "En 2016, Italia, y en 2020, otras 3 organizaciones culturales líderes en Europa, dan un impulso internacional a la conversación y se suman a Conectando Audiencias. Se crean ediciones en sus propios idiomas formando así un nuevo <strong>consejo editorial internacional</strong> donde está incluida: <strong>América Latina, Dinamarca, España, Italia, Polonia y Portugal.</strong>",
    image: "/svg/world-location.svg",
  },
];
</script>
