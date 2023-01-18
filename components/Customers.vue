<template>
  <section class="customers">
    <!-- TODO revisar -->
    <h2 class="customers__description" v-if="togglesActive">
      A continuación, puedes ver el listado de clientes de Asimétrica:
    </h2>
    <article
      class="customers__category"
      v-for="(i, index) in customerCategories"
      :key="index"
      @click="toggleList(index)"
    >
      <h2
        class="customers__title"
        :class="{
          'customers__title--active': toggleIndex === index && togglesActive,
          'customers__title--no-toggle': !togglesActive,
        }"
      >
        {{ i.title }}
      </h2>
      <ul
        class="customers__list"
        v-if="toggleIndex === index || togglesActive === false"
      >
        <li
          v-for="(e, index2) in i.customers"
          :key="index2"
          class="customers__element"
        >
          <nuxt-link :to="e.url" class="customers__link">{{
            e.title
          }}</nuxt-link>
        </li>
      </ul>
    </article>
    <div class="customers__bottom" v-if="togglesActive">
      <h3 class="customers__bottom-title">Y muchos más</h3>
      <nuxt-link class="button button--sm" to="/servicios/nuestros-clientes"
        >Todos los clientes</nuxt-link
      >
    </div>
  </section>
</template>
<script lang="ts" setup>
interface Props {
  togglesActive?: boolean;
  customerCategories?: any;
}
const { togglesActive } = defineProps<Props>();

let toggleIndex = ref(0);

function toggleList(index: number): void {
  if (togglesActive === true && toggleIndex.value !== index) {
    toggleIndex.value = index;
  } else if (toggleIndex.value === index) {
    toggleIndex.value = 0;
  }
}
</script>
