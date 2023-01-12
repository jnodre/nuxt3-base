<template>
  <section class="subscribe">
    <div class="subscribe__title" v-html="subscribeBlock.title"></div>
    <nuxt-link class="button button--light" to="/suscribirse"
      >Suscribirme</nuxt-link
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
    "<p>Si no lo has hecho ya, puedes suscribirte aquí a nuestro newsletter mensual y recibir cada nuevo número de Conectando Audiencias cómodamente en tu correo electrónico.</p>",
  image: {
    url: "/images/subscribe.jpg",
  },
};
</script>
