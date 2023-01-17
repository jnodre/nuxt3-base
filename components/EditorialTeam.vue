<template>
  <section class="editorial-team" v-if="editorCategories">
    <h2 class="editorial-team__title">{{ title }}</h2>
    <h3 v-if="description" class="editorial-team__description">
      {{ description }}
    </h3>
    <div
      class="editorial-team__category"
      v-for="(i, index) in editorCategories"
      :key="index"
    >
      <h4 class="editorial-team__category-title">
        {{ i.title }}
      </h4>
      <div class="editorial-team__grid">
        <TeamElement
          v-for="(editor, index) in i.editors"
          :key="index"
          :element="editor"
          :company="i.title"
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
  editorCategories?: any;
}

const { title, description, editorCategories } = defineProps<Props>();
</script>
