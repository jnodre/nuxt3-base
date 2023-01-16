<template>
  <div class="page-pink">
    <Breadcrumbs id />
    <Teacher />
    <EventsGrid :events="events.data" title="Recursos realizados" recommended />
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
