<template>
  <section class="subscribe">
    <div class="subscribe__title" v-html="subscribeBlock.title"></div>
    <nuxt-link class="button button--light" to="/suscribirse"
      >Suscribe</nuxt-link
    >
    <div class="subscribe__image">
      <img :src="subscribeBlock.image.url" alt="" />
    </div>
  </section>
</template>
<script lang="ts" setup>
type SubscribeType = {
  title: string;
  image: {
    url: string;
  };
};
const subscribeBlock: SubscribeType = {
  title:
    "<p>If you haven’t already done so, you can subscribe to our monthly newsletter here and receive each new issue of Conectando Audiencias comfortably in your email.</p>",
  image: {
    url: "https://dummyimage.com/200.jpg",
  },
};
</script>
