<template>
  <div
    id="modal-search"
    class="search-modal"
    :class="{ 'search-modal--active': searchOn }"
  >
    <div class="search-input">
      <input
        class="search-input__input"
        type="text"
        placeholder="¿Qué estás buscando…?"
        aria-label="¿Qué estás buscando…?"
      />
      <nuxt-link to="/busqueda" class="search-input__button">
        <img src="~/assets/svg/search-white.svg" alt="Buscar" />
      </nuxt-link>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { Ref } from "vue";
const props = defineProps({ searchOn: Boolean });
</script>
