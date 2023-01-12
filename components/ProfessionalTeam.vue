<template>
  <div class="professional-team">
    <h2 class="professional-team__title">{{ title }}</h2>
    <nuxt-link to="/formacion/equipo" class="button">{{ button }}</nuxt-link>
  </div>
</template>
<script lang="ts" setup>
interface Props {
  title?: string;
  button?: string;
}

const { title, button } = defineProps<Props>();

</script>
