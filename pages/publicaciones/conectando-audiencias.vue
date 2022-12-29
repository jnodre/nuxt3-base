<template>
  <Breadcrumbs />
  <DotSection
    title="Conectando Audiencias"
    description="La revista para profesionales de la gestión cultural"
  />
  <FeaturedMagazine
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
  <MediaContainer
    :videos="videos.data.slice(0, 3)"
    title="Asimétrica en Vimeo"
    subtitle="Encuentros digitales y más contenidos en vídeo."
  />
  <WorkUs />
  <Subscribe />
</template>
<script setup lang="ts">
import { Testimonials } from "types/testimonial";

const { data: testimonials } = useFetch<any>(
  "https://api.asimetrica.abanico.net/api/testimonials"
);
</script>
