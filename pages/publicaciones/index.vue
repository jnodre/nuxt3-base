<template>
  <Breadcrumbs />

  <DotSection description="Destacamos" />
  <FeaturedMagazine
    :magazine="{
      title: 'CA 17 - Escuchando a la audiencia',
      subtitle: 'Una oportunidad para redefinir nuestro futuro',
      date: '30.11.2021',
      description:
        '<p>Tras 10 años de andadura continuamos con la curiosidad intacta por conocer más sobre la audiencia y los públicos, viviendo la realidad que tenemos delante con la mejor actitud y planteando <strong>escuchar al público como una oportunidad para definir una realidad distinta</strong>. En este número, compartiremos 5 aproximaciones distintas de especial relevancia:</p><ul><li><strong>Chris Unitt</strong> (One Further)</li><li><strong>Chris Unitt</strong> (One Further)</li><li><strong>Chris Unitt</strong> (One Further)</li><li><strong>Chris Unitt</strong> (One Further)</li></ul>',
      image: { fullUrlThumb: 'https://dummyimage.com/200.jpg' },
    }"
  />
  <Subscribe />

  <EventsGrid
    :events="events.data"
    title="Conectando Audiencias"
    subtitle="La revista para profesionales de la gestión cultural."
  />

  <MediaContainer
    :videos="videos.data.slice(0, 3)"
    title="Asimétrica en Vimeo"
    subtitle="Encuentros digitales y más contenidos en vídeo."
  />
  <MediaContainer
    :podcasts="podcasts.data.slice(0, 3)"
    title="Asimétrica Podcast"
    subtitle="15-30 minutos de inspiración cada mes, solo en audio."
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

const { data: podcasts } = useFetch<any>(
  "https://api.asimetrica.abanico.net/api/podcasts"
);

const { data: videos } = useFetch<any>(
  "https://api.asimetrica.abanico.net/api/videos"
);
</script>
