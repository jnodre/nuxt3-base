<template>
  <Breadcrumbs />
  <div class="page-text-dot-magazine-container">
    <DotSection
      title="Conectando Audiencias"
      description="La revista para profesionales de la gestión cultural"
    />
    <PageText
      description="<p style='text-align: center'>Conectando Audiencias es un proyecto editorial que busca compartir las mejores prácticas internacionales en torno al desarrollo de públicos, el marketing de las artes y la gestión cultural.</p>"
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
    />
  </div>
  <ListenSection title="Abiertos a escuchar, compartir, invitar…" />
  <div class="magazine-grid-team-container">
    <MagazineGrid :magazines="magazines" title="Todos los números" loadMore />
    <EditorialTeam
      title="Consejo editorial"
      description="Profesionales de la gestión cultural de 6 países conforman el equipo editorial de Conectando Audiencias / Connecting Audiences"
      :editorCategories="editorCategories"
    />
  </div>
  <ParticipateCA />
  <WorkUs />
  <Subscribe />
</template>
<script setup lang="ts">
import { Testimonials } from "types/testimonial";
// const config = useRuntimeConfig();
let editorCategories: any = ref([]);
let magazines: any = ref([]);

useFetch<any>("https://api.asimetrica.abanico.net/api/editorCategories").then(
  (r) => (editorCategories.value = r.data.value.data)
);

useFetch<any>(`/api/magazines`).then((r) => console.log(r));
</script>
