<template>
  <div class="blog-filters">
    <div class="input-container">
      <label class="input-container__label" for="search"
        >Escribe palabra clave
      </label>

      <input
        class="input-container__input"
        type="text"
        name="search"
        id="search"
        v-model="searchKey"
        placeholder="Escribe palabra clave"
        @keypress.enter="search()"
      />
    </div>
    <div class="input-container">
      <label class="input-container__label" for="search"
        >Escoge una categoría</label
      >
      <button
        class="select-label"
        :class="{ 'select-label--active': categoryKey.length > 0 }"
        @click="categoryActive = !categoryActive"
      >
        {{ categoryKey || "Escoge una categoría" }}
        <img
          class="select-label__icon"
          src="~/assets/svg/arrow-rotate.svg"
          alt=""
        />
      </button>

      <ul class="select" :class="{ 'select--active': categoryActive }">
        <li @click="filterCategory('')">Todas las categorías</li>
        <li
          v-for="(category, index) in categories"
          :key="index"
          @click="filterCategory(category)"
        >
          {{ category }}
        </li>
      </ul>
    </div>
    <div class="input-container">
      <label class="input-container__label" for="search">Ordenar por</label>
      <button
        class="select-label"
        :class="{ 'select-label--active': orderKey.length > 0 }"
        @click="orderActive = !orderActive"
      >
        {{ orderKey || "Ordena" }}
        <img
          class="select-label__icon"
          src="~/assets/svg/order-arrow.svg"
          alt=""
        />
      </button>

      <ul class="select" :class="{ 'select--active': orderActive }">
        <li @click="order('Ascendente')">Orden ascendente</li>
        <li @click="order('Descendente')">Orden descendente</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { Ref } from "vue";
const emit = defineEmits(["search"]);

let searchKey: Ref<string> = ref("");
let orderKey: Ref<string> = ref("");
let categoryKey: Ref<string> = ref("");
let orderActive: Ref<boolean> = ref(false);
let categoryActive: Ref<boolean> = ref(false);
let categories = ["categoria 1", "categoria 2"];

function search(): void {
  emit("search", searchKey.value);
}
function order(order: string): void {
  orderKey.value = order;
  emit("order", order);
  orderActive.value = false;
}
function filterCategory(category: string): void {
  categoryKey.value = category;
  emit("filterCategory", category);
  categoryActive.value = false;
}
</script>
