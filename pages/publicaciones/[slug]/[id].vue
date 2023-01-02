<template>
  <div class="page-pink">
    <Breadcrumbs title="Autor" />
    <Teacher />
    <EventsGrid
      :events="events.data"
      title="Recursos relacionados"
      recommended
    />
  </div>
  <ProfessionalTeam title="Un grupo profesional" button="Todos los autores" />
  <WorkUs />
  <Subscribe title="Un grupo profesional" button="Todos los autores" />
</template>
<script lang="ts" setup>
const { data: events } = useFetch<any>(
  "https://api.asimetrica.abanico.net/api/workshops"
);
</script>
