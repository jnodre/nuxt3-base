<template>
  <Breadcrumbs link="nuestros-clientes" />
  <!-- <BackButton /> -->
  <DotSection
    title="Nuestros clientes"
    description="Orgullosos de haber trabajado con decenas de organizaciones culturales por el mundo."
  />
  <Customers :customerCategories="customerCategories" />
  <WorkUs />
  <Subscribe />
</template>
<script setup lang="ts">
let customerCategories = ref([]);

useFetch<any>("https://api.asimetrica.abanico.net/api/customerCategories").then(
  (r) => (customerCategories.value = r.data.value.data)
);
</script>
