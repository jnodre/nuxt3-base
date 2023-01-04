<template>
  <Breadcrumbs />
  <DotSection
    title="Blog de Asimétrica"
    description="Bienvenidos al blog de investigación y desarrollo de audiencias, marketing y experiencia del usuario para profesionales de la gestión cultural"
  />
  <BlogFilters @search="search" />
  <div class="featured-post">
    <BlogPost :post="posts[0]" />
  </div>
  <div class="blog__grid">
    <BlogPost
      :post="post"
      v-for="(post, index) in posts.slice(0, numberPostsShown)"
      :key="index"
    />
  </div>
  <button
    v-if="numberPostsShown !== posts.length"
    class="button button--dark blog__button"
    @click="incresePostsShown()"
  >
    Cargar más
  </button>
  <WorkUs />
  <Subscribe />
</template>
<script setup lang="ts">
import type { Posts, Post } from "types/post";
import type { Ref } from "vue";

let postsApi: Ref<any> = ref([]);
let posts: Ref<any> = ref([]);

useFetch<any>("https://api.asimetrica.abanico.net/api/posts").then((r) => {
  postsApi = r.data.value.data;
  posts.value = JSON.parse(JSON.stringify(postsApi));
});

let numberPostsShown: Ref<number> = ref(4);
let searchKey: Ref<string> = ref("");

function incresePostsShown(): void {
  numberPostsShown.value = numberPostsShown.value + 2;
}

function search(value: string) {
  searchKey.value = value;
  posts.value = JSON.parse(JSON.stringify(posts.value)).value.filter((r: any) =>
    r.title.includes(value)
  );
}
</script>
