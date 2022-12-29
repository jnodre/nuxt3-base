<template>
  <section class="history-section">
    <h2 class="history-section__title">{{ title }}</h2>
    <article
      class="history-section__element"
      v-for="(element, index) in elements"
      :key="index"
    >
      <div class="history-section__text">
        <h2 class="history-section__element-title">{{ element.title }}</h2>
        <div
          class="history-section__element-description"
          v-html="element.description"
        ></div>
      </div>
      <img
        class="history-section__image"
        src="https://dummyimage.com/200.jpg"
        alt=""
      />
    </article>
    <section class="history-section__know-more" v-if="short">
      <h2 class="history-section__know-more-title">¿Quieres saber más?</h2>
      <nuxt-link to="/sobre-asimetrica" class="button">Conócenos</nuxt-link>
    </section>
  </section>
</template>

<script lang="ts" setup>
import { HistoryElements } from "types/history-element";

interface Props {
  title?: string;
  description?: string;
  elements: HistoryElements;
  short?: boolean;
}

const { title, description, elements } = defineProps<Props>();
</script>
