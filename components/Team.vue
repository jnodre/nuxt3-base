<template>
  <section class="team-container">
    <h2 class="team-container__title">{{ title }}</h2>
    <h3 v-if="description" class="team-container__description">
      {{ description }}
    </h3>
    <div class="team-container__grid">
      <TeamElement
        v-for="(teacher, index) in team"
        :key="index"
        :element="teacher"
      />
    </div>
  </section>
</template>
<script setup lang="ts">
import { Teachers } from "types/teacher";
interface Props {
  title?: string;
  description?: string;
  team: Teachers;
}

const { teachers, title, description } = defineProps<Props>();
</script>
