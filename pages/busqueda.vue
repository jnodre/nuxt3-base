<template>
  <Breadcrumbs />
  <div class="search-container">
    <div class="search-input">
      <input
        class="search-input__input"
        type="text"
        placeholder="¿Qué estás buscando…?"
      />
      <nuxt-link to="/busqueda" class="search-input__button">
        <img src="~/assets/svg/search-purple.svg" alt="Buscar" />
      </nuxt-link>
    </div>
    <div class="search-container__description" v-if="searchResults.length">
      {{ searchResults.length }} elementos que coinciden con lo que buscas
    </div>
    <div class="search-container__description" v-else>
      No se ha encontrado ningún elemento que coincida con lo que buscas
    </div>
  </div>
</template>
<script lang="ts" setup>
let searchResults: [] = [];
</script>
