<template>
  <Header class="header">
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__element nav__element--center">
          <nuxt-link to="" aria-label="Enlace a la home"
            ><img class="nav__logo" src="https://dummyimage.com/100.gif" alt=""
          /></nuxt-link>
        </li>
        <li class="nav__element nav__element--right">
          <a class="nav__logo" href="">Agenda una llamada</a>
        </li>
        <li class="nav__element nav__element--right">
          <button
            @click="toggleSearch"
            class="nav__search"
            aria-label="Buscar"
            aria-controls="modal-search"
            aria-expanded="false"
          >
            <img src="https://dummyimage.com/100.gif" alt="Buscar" />
          </button>
        </li>
        <li class="nav__element nav__element--right">
          <button
            class="nav__menu"
            aria-controls="modal-menu"
            aria-expanded="false"
            @click="toggleMenu"
          >
            Menú
            <img
              aria-hidden="true"
              src="https://dummyimage.com/100.gif"
              alt="Menú"
            />
          </button>
        </li>
      </ul>
    </nav>
  </Header>
  <nav
    class="modal-menu"
    id="modal-menu"
    :class="{ 'modal-menu--active': menuOn }"
  >
    <ul class="modal-menu__list">
      <li class="modal-menu__element">
        <nuxt-link to="/servicios/">Servicio</nuxt-link>

        <ul class="modal-menu__sub-list">
          <li class="modal-menu__sub-element">
            <nuxt-link to="/servicios/investigacion-analisis-publico"
              >Investigación y análisis del público</nuxt-link
            >
          </li>
          <li class="modal-menu__sub-element">
            <nuxt-link to="/servicios/marketing-relacional"
              >Marketing relacional</nuxt-link
            >
          </li>
          <li class="modal-menu__sub-element">
            <nuxt-link to="/servicios/planes-gestion-publicos"
              >Planes de gestión de públicos</nuxt-link
            >
          </li>
          <li class="modal-menu__sub-element">
            <nuxt-link to="/servicios/experiencia-usuario"
              >Experiencia del usuario</nuxt-link
            >
          </li>
          <li class="modal-menu__sub-element">
            <nuxt-link to="/servicios/training-formacion"
              >Training y Formación</nuxt-link
            >
          </li>
        </ul>
      </li>
      <li class="modal-menu__element">
        <nuxt-link to="/publicaciones">Publicaciones</nuxt-link>
      </li>
      <li class="modal-menu__element">
        <nuxt-link to="/blog">Blog</nuxt-link>
      </li>
      <li class="modal-menu__element">
        <nuxt-link to="/sobre-asimetrica">Sobre Asimétrica</nuxt-link>
      </li>
      <li class="modal-menu__element">
        <nuxt-link to="/contacto">Agenda una llamada / Contacto</nuxt-link>
      </li>
      <li class="modal-menu__element">
        <nuxt-link to="/newsletter">Newsletter</nuxt-link>
      </li>
    </ul>
  </nav>
  <Search :searchOn="searchOn" id="search-modal" />
</template>
<script lang="ts" setup>
import type { Ref } from "vue";
let menuOn: Ref<boolean> = ref(false);
let searchOn: Ref<boolean> = ref(false);
function toggleMenu() {
  menuOn.value = !menuOn.value;
  searchOn.value = false;
}
function toggleSearch() {
  searchOn.value = !searchOn.value;
  menuOn.value = false;
}
</script>
