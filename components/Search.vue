<template>
  <div class="search-modal" :class="{ 'search-modal--active': searchOn }">
    <Breadcrumbs link="Búsqueda" />
    <input type="text" />
    <label for="">¿Qué estás buscando...?</label>
  </div>
</template>
<script lang="ts" setup>
import type { Ref } from "vue";
const props = defineProps({ searchOn: Boolean });
</script>
