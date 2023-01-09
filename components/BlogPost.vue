<template>
  <article class="blog-post" v-if="post">
    <div class="blog-post__date-container">
      <span class="blog-post__date">{{ post.created_at }}</span>
      <span class="blog-post__author">{{ post.author }}</span>
    </div>
    <figure class="blog-post__image">
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
    <p class="blog-post__categories">Categorías</p>
    <h2 class="blog-post__title">{{ post.title }}</h2>
    <p class="blog-post__description">{{ post.entry }}</p>
    <nuxt-link :to="`/blog/${post.title}/${post.id}`" class="button"
      >Leer más</nuxt-link
    >
  </article>
</template>
<script lang="ts" setup>
import type { Post } from "types/post";

interface Props {
  post?: Post;
}

const { post = {} } = defineProps<Props>();
</script>
