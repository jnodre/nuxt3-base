<template>
  <section>
    <h2>Equipo</h2>
    <article v-for="(teacher, index) in teachers" :key="index">
      <h2>{{ teacher.name }}</h2>
      <h3>{{ teacher.job }}</h3>
    </article>
  </section>
</template>
<script setup lang="ts">
import { Teachers } from 'types/teacher'
const props = defineProps({
  description: String,
})
let teachers: Teachers = []

onMounted(() => fetch('https://api.asimetrica.abanico.net/api/teachers'))
</script>
