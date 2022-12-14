<template>
  <div
    class="image-parallax"
    :style="{ 'background-image': `url(${image?.['url']})` }"
  ></div>
</template>
<script setup lang="ts">
const props = defineProps({
  image: Object,
});
</script>
