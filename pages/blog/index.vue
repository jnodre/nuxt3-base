<template>
  <Breadcrumbs />
  <DotSection
    title="Blog de Asimétrica"
    description="Bienvenidos al blog de investigación y desarrollo de audiencias, marketing y experiencia del usuario para profesionales de la gestión cultural"
  />
  <BlogFilters
    @search="search"
    @order="order"
    @filterCategory="filterCategory"
  />
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
  postsApi.value = r.data.value.data;
  posts.value = postsApi.value.filter((r: any) => r);
});

let numberPostsShown: Ref<number> = ref(4);
let searchKey: Ref<string> = ref("");
let orderKey: Ref<string> = ref("");
let categoryKey: Ref<string> = ref("");

function incresePostsShown(): void {
  numberPostsShown.value = numberPostsShown.value + 2;
}

function search(value: string) {
  searchKey.value = value;
  posts.value = postsApi.value.filter((r: any) => r.title.includes(value));
  //vuelve a filtrar
  if (orderKey.value.length) {
    order(orderKey.value);
  }
  if (categoryKey.value.length) {
    order(categoryKey.value);
  }
}
function filterCategory(value: string) {
  categoryKey.value = value;
  posts.value = postsApi.value.filter((r: any) => r.categories.includes(value));
  //vuelve a filtrar
  if (orderKey.value.length) {
    order(orderKey.value);
  }
  if (searchKey.value.length) {
    search(searchKey.value);
  }
}
function order(value: string) {
  orderKey.value = value;
  if (value === "Ascendente") {
    posts.value = postsApi.value.sort((a: Post, b: Post) =>
      a.title.localeCompare(b.title)
    );
  } else if (value === "Descendente") {
    posts.value = postsApi.value.sort((a: Post, b: Post) =>
      b.title.localeCompare(a.title)
    );
  } else posts.value = postsApi.value.map((r: any) => r);
  //vuelve a filtrar
  if (searchKey.value.length) {
    search(searchKey.value);
  }
  if (categoryKey.value.length) {
    order(categoryKey.value);
  }
}
</script>
