<template>
  <main class="page-pink">
    <Breadcrumbs />
    <Team
      title="Equipo docente"
      description="Un grupo profesional que busca la excelencia académica en cada taller impartido."
      :team="teachers.data"
    />
  </main>
  <WorkUs />
  <Subscribe />
</template>
<script setup lang="ts">
const { data: teachers } = useFetch<any>(
  "https://api.asimetrica.abanico.net/api/teachers"
);
</script>
