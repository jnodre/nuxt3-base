<template>
  <nav class="breadcrumbs">
    <ul class="breadcrumbs__list">
      <li class="breadcrumbs__element">
        <nuxt-link class="breadcrumbs__link" to="/">Asimétrica</nuxt-link>
      </li>
      <li
        class="breadcrumbs__element"
        v-for="(route, index) in routesList"
        :key="index"
      >
        <template v-if="index === routesList.length - 1">
          <span>{{ title || removeBar(route) }}</span>
        </template>
        <template v-else>
          <nuxt-link class="breadcrumbs__link" :to="`/${route}`">{{
            title || removeBar(route)
          }}</nuxt-link>
        </template>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts" setup>
import type { Ref } from "vue";

const route = useRoute();

interface Props {
  title?: string;
  id?: boolean;
}

const { title, id } = defineProps<Props>();

let routesList = computed<String[]>(() => {
  if (id) {
    return (routesList.value = route.path
      .split("/")
      .filter((r) => r.length)
      .slice(0, -1));
  } else
    return (routesList.value = route.path.split("/").filter((r) => r.length));
});

function removeBar(string: String): String {
  return string.replace("-", " ");
}
</script>
