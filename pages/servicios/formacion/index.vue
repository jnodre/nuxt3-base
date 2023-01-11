<template>
  <DotSection
    description="Talleres online en directo diseñados para aumentar tu impacto profesional"
  />
  <nav>
    <ul class="button-container">
      <li class="button button--dark">
        <nuxt-link to="">Nuestro próximo taller</nuxt-link>
      </li>
      <li class="button"><nuxt-link to="">Recurso destacado</nuxt-link></li>
    </ul>
  </nav>
  <Testimonials
    description="Enfoque práctico y con experiencia de primera mano. Te enseñamos sobre casos reales poniendo el foco en un aspecto concreto de la gestión de públicos."
    :testimonials="[
      {
        name: 'Destapa tu potencial',
        description:
          'Hace tiempo que quieres <strong>formación práctica</strong> sobre la investigación y gestión de públicos para aplicar en tu organización cultural. Nosotros podemos ayudarte. Descubre cómo.',
      },
      {
        name: 'Aprende de expertos',
        description:
          'Hemos formado a más de mil profesionales de la cultura de España y América Latina. Siempre centrados en los aspectos clave que integran la gestión de públicos, de la estrategia a la medición.',
      },
      {
        name: 'Gana confianza',
        description:
          'Tu capacidad para mejorar no reside únicamente en tener una “caja de herramientas”. Aquí te damos la confianza para llevar a cabo el trabajo y presentarlo con éxito.',
      },
    ]"
  />

  <TestimonialsCarrousel
    :testimonials="page.data.testimonials"
    title="Clientes y Testimonios"
  />
  <NextEvent :event="events.data[0]" />
  <EventsGrid :events="events.data" title="Todos los talleres" />
  <FeaturedMagazine
    bottom
    :magazine="{
      title: 'CA 17 - Escuchando a la audiencia',
      subtitle: 'Una oportunidad para redefinir nuestro futuro',
      date: '30.11.2021',
      description:
        '<p>Tras 10 años de andadura continuamos con la curiosidad intacta por conocer más sobre la audiencia y los públicos, viviendo la realidad que tenemos delante con la mejor actitud y planteando <strong>escuchar al público como una oportunidad para definir una realidad distinta</strong>. En este número, compartiremos 5 aproximaciones distintas de especial relevancia:</p><ul><li><strong>Chris Unitt</strong> (One Further)</li><li><strong>Chris Unitt</strong> (One Further)</li><li><strong>Chris Unitt</strong> (One Further)</li><li><strong>Chris Unitt</strong> (One Further)</li></ul>',
      image: { fullUrlThumb: 'https://dummyimage.com/200.jpg' },
    }"
    title="Leer, ver, escuchar…"
    description="El disfrute del saber"
  />
  <WorkUs />
  <Subscribe />
</template>

<script lang="ts" setup>
import type { Event } from "types/event";

const { data: page } = useFetch<any>(
  "https://api.asimetrica.abanico.net/api/pages/8"
);
const { data: events } = useFetch<any>(
  "https://api.asimetrica.abanico.net/api/workshops"
);
</script>
