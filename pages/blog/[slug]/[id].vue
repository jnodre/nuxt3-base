<template>
  <Breadcrumbs id />
  <main class="blog-article">
    <div class="blog-article__date-container">
      <span class="blog-article__date">{{ post.created_at }}</span>
      <span class="blog-article__author">{{ post.author }}</span>
    </div>
    <figure class="blog-article__image">
      <img
        v-if="post.image"
        :src="post.image?.fullUrlThumb"
        :alt="post.title"
      />
      <img
        v-else
        src="https://dummyimage.com/350x300.jpg"
        alt="imagen de prueba"
      />
    </figure>
    <h2 class="blog-article__categories">categorias</h2>
    <h1 class="blog-article__title">{{ post.title }}</h1>
    <div
      class="blog-article__content"
      v-html="
        `<p>Esta recopilación de artículos, nacida del encuentro, supone la segunda publicación dentro de la línea editorial destinada a la difusión de los resultados de jornadas formativas realizadas por el Laboratorio Permanente de Público de Museos. </p><p>Esta recopilación de artículos, nacida del encuentro, supone la segunda publicación dentro de la línea editorial destinada a la difusión de los resultados de jornadas formativas realizadas por el Laboratorio Permanente de Público de Museos. </p><figure><img src='https://dummyimage.com/350x300.jpg' alt='imagen de prueba' /><figcaption>Texto</figcaption></figure><p>Esta recopilación de artículos, nacida del encuentro, supone la segunda publicación dentro de la línea editorial destinada a la difusión de los resultados de jornadas formativas realizadas por el Laboratorio Permanente de Público de Museos.</p>`
      "
    ></div>
    <BlogGallery />
    <!-- <BlogVideo /> -->
    <BlogDownloadFile />
    <BlogShare />
  </main>
  <BlogRecommendations :posts="posts" />

  <WorkUs />
  <Subscribe />
</template>
<script lang="ts" setup>
import { reactive } from "vue";

const route = useRoute();

let post = reactive({});
let posts = ref([]);

useFetch<any>(`https://api.asimetrica.abanico.net/api/posts/`).then((r) => {
  posts.value = r.data.value.data;
});

useFetch<any>(
  `https://api.asimetrica.abanico.net/api/posts/${route.params.id}`
).then((r) => {
  post = r.data.value.data;
});
</script>
