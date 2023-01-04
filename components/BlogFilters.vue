<template>
  <div class="blog-filters">
    <div class="input-container input-container--full">
      <label class="input-container__label" for="search"
        >Escribe palabra clave</label
      >
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
  </div>
</template>
<script lang="ts" setup>
import type { Ref } from "vue";

const emit = defineEmits(["search"]);

let searchKey: Ref<string> = ref("");

function search(): void {
  emit("search", searchKey.value);
}
</script>
