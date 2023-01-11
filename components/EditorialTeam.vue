<template>
  <section class="editorial-team" v-if="editors">
    <h2 class="editorial-team__title">{{ title }}</h2>
    <h3 v-if="description" class="editorial-team__description">
      {{ description }}
    </h3>
    <div class="editorial-team__category">
      <h4 class="editorial-team__category-title">
        Conectando Audiencias España - <span>Asimétrica</span>
      </h4>
      <div class="editorial-team__grid">
        <TeamElement
          v-for="(teacher, index) in editors"
          :key="index"
          :element="teacher"
        />
      </div>
    </div>
    <div class="editorial-team__category">
      <h4 class="editorial-team__category-title">
        Conectando Audiencias España - <span>Asimétrica</span>
      </h4>
      <div class="editorial-team__grid">
        <TeamElement
          v-for="(teacher, index) in editors"
          :key="index"
          :element="teacher"
        />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { Teachers } from "types/teacher";
interface Props {
  title?: string;
  description?: string;
  editors?: Teachers;
}

const { editors, title, description } = defineProps<Props>();
</script>
