<template>
  <!--TODO quitar el servicio de la pagina y que venga de API-->
  <section class="we-do">
    <h2 class="we-do__title">Otras cosas que hacemos</h2>
    <article v-for="(i, index) in list" :key="index" class="we-do__element">
      <img :src="`/svg/${i.image}.svg`" :alt="i.title" class="we-do__image" />
      <h3 class="we-do__element-title">{{ i.title }}</h3>
      <nuxt-link
        :to="`/servicios/${i.link}`"
        class="we-do__link button button-sm button--light"
        >Saber más</nuxt-link
      >
    </article>
  </section>
</template>

<script setup lang="ts">
const list: any = [
  {
    title: "Marketing relacional",
    image: "marketing-relacional",
    link: "marketing-relacional",
  },
  {
    title: "Plan de públicos",
    image: "plan-publicos",
    link: "investigacion-de-publico",
  },
  {
    title: "Experiencia del usuario",
    image: "experiencia-usuario",
    link: "experiencia-usuario",
  },
  {
    title: "Training y Formación",
    image: "training-formacion",
    link: "training-formacion",
  },
];
</script>
