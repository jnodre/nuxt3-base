<template>
  <section class="services-container">
    <h2 class="services-container__title">{{ title }}</h2>
    <ServiceArticle
      v-for="(service, i) in services.data"
      :key="`service-${i}`"
      :service="service"
    />
  </section>
</template>
<script setup lang="ts">
const { data: services } = useFetch(
  "https://api.asimetrica.abanico.net/api/services"
);

interface Props {
  title?: string;
}

const { title } = defineProps<Props>();
</script>
