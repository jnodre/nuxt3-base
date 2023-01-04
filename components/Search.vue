<template>
  <div class="search-modal" :class="{ 'search-modal--active': searchOn }">
    <div class="search-input">
      <input
        class="search-input__input"
        type="text"
        placeholder="¿Qué estás buscando…?"
      />
      <button class="search-input__button">
        <img src="~/assets/svg/search-white.svg" alt="Buscar" />
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { Ref } from "vue";
const props = defineProps({ searchOn: Boolean });
</script>
