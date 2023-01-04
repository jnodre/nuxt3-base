<template>
  <div class="modal" :class="{ 'modal--active': modalActive }">
    <button @click="closeModal()">
      <img
        src="~/assets/svg/close-white.svg"
        alt="Cerrar"
        class="modal__close"
      />
    </button>
    <div class="modal__container">
      <h2 class="modal__title">{{ title }}</h2>
      <h2 class="modal__description">{{ description }}</h2>
      <button v-if="buttonActive" class="button button--full">Entendido</button>
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { Ref } from "vue";

const emit = defineEmits(["closeModal"]);

interface Props {
  title?: string;
  description?: string;
  buttonActive?: boolean;
  active?: boolean;
}

const { active, title, description, buttonActive } = defineProps<Props>();

let modalActive: Ref<boolean> = ref(false);

function closeModal(): void {
  modalActive.value = false;
}
watch(modalActive, (value) => {
  value
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "visible");
});

//probando que el watcher funciona BORRAR al lanzar
setTimeout(() => {
  modalActive.value = true;
}, 300);
</script>
