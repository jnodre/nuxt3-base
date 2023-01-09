<template>
  <section class="recommendations">
    <h2 class="recommendations__title">También podría interesarte…</h2>
    <button
      class="recommendations__button"
      @click="moveSliderLeft()"
      v-if="sliderIndex > 0"
    >
      <img src="~/assets/svg/arrow.svg" alt="" />
    </button>
    <button
      class="recommendations__button recommendations__button--rotate"
      @click="moveSliderRight()"
      v-if="
        (windowWidth >= 1600 && sliderIndex <= posts.length - 3) ||
        (windowWidth >= 1250 &&
          sliderIndex <= posts.length - 2 &&
          windowWidth < 1600)
      "
    >
      <img src="~/assets/svg/arrow.svg" alt="" />
    </button>
    <section class="recommendations__slider-container">
      <div class="recommendations__slider" id="slider">
        <!--TODO arreglar-->>
        <BlogPost
          :class="{ 'blog-post--active': sliderPosition === postIndex }"
          :id="postIndex === 0 ? 'slider-width' : ''"
          :post="post"
          v-for="(post, postIndex) in posts"
          :key="postIndex"
        />
      </div>
    </section>
    <div class="recommendations__button-mobile-container">
      <div>
        <button
          class="recommendations__button"
          @click="moveSliderLeft()"
          v-if="sliderIndex > 0"
        >
          <img src="~/assets/svg/arrow.svg" alt="" />
        </button>
      </div>
      <div>
        <button
          class="recommendations__button recommendations__button--rotate"
          @click="moveSliderRight()"
          v-if="
            (windowWidth >= 1600 && sliderIndex <= posts.length - 3) ||
            windowWidth >= 1250 ||
            (windowWidth < 1250 && sliderIndex < posts.length - 1)
          "
        >
          <img src="~/assets/svg/arrow.svg" alt="" />
        </button>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import type { Ref } from "vue";
import { Posts } from "types/post";

interface Props {
  title?: string;
  posts?: Posts;
}

const { posts, title } = defineProps<Props>();

let sliderIndex: Ref<number> = ref(0);
let slider: HTMLElement | null = null;
let sliderWidth: HTMLElement | null = null;
let sliderPosition: Ref<number> = ref(0);
let windowWidth: Ref<number> = ref(0);

if (process.client) {
  window.addEventListener("resize", onResize);
}

onMounted(() => {
  slider = document.getElementById("slider");
  windowWidth.value = window.innerWidth;
});

function onResize(): void {
  slider!.style.transform = "translateX(0px)";
  sliderIndex.value = 0;
  sliderWidth = document.getElementById("slider-width");
  sliderPosition.value = 0;
  windowWidth.value = window.innerWidth;
}

function moveSliderLeft(): void {
  sliderWidth = document.getElementById("slider-width");
  if (slider !== null) {
    sliderPosition.value =
      sliderPosition.value +
      sliderWidth!.offsetWidth +
      parseInt(getComputedStyle(slider).gap.replace("px", ""));
    slider.style.transform = `translateX(${sliderPosition.value}px)`;
    sliderIndex.value--;
  }
}
function moveSliderRight(): void {
  sliderWidth = document.getElementById("slider-width");
  if (slider !== null) {
    sliderPosition.value =
      sliderPosition.value -
      sliderWidth!.offsetWidth -
      parseInt(getComputedStyle(slider).gap.replace("px", ""));
    slider.style.transform = `translateX(${sliderPosition.value}px)`;
    sliderIndex.value++;
  }
}
</script>
