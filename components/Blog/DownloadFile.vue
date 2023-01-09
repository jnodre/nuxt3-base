<template v-if="file">
  <a :href="file?.fullUrl" download class="button button--dark button--center"
    >Descargar Recurso</a
  >
</template>
<script setup lang="ts">
import type { File } from "types/file";
interface Props {
  file?: File;
}

const { file } = defineProps<Props>();
</script>
