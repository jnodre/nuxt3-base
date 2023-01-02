<template>
  <div class="page-pink">
    <Breadcrumbs />
    <Teacher />
    <EventsGrid
      :events="events.data"
      title="Cursos en los que ha participado"
      recommended
    />
  </div>
  <ProfessionalTeam title="Equipo Asimétrica" button="Conócenos" />
  <WorkUs />
  <Subscribe />
</template>
<script lang="ts" setup>
const { data: events } = useFetch<any>(
  "https://api.asimetrica.abanico.net/api/workshops"
);
</script>
