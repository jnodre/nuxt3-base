<template>
  <header class="header">
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__element nav__element--center">
          <nuxt-link to="" aria-label="Enlace a la home"
            ><img class="nav__logo" src="/images/logo.png" alt=""
          /></nuxt-link>
        </li>
        <li class="nav__element nav__element--right">
          <a class="nav__link" href="">Agenda una llamada</a>
        </li>
        <li class="nav__element nav__element--right">
          <button
            @click="toggleSearch"
            class="nav__search"
            aria-label="Buscar"
            aria-controls="modal-search"
            aria-expanded="false"
          >
            <img
              class="nav__search-icon"
              src="~/assets/svg/search.svg"
              alt="Buscar"
            />
          </button>
        </li>
        <li class="nav__element nav__element--right">
          <button
            class="nav__menu"
            aria-controls="modal-menu"
            aria-expanded="false"
            @click="toggleMenu"
          >
            <span v-if="menuOn || searchOn"> Cerrar </span>
            <span v-else> Menú </span>
            <img
              v-if="menuOn || searchOn"
              src="~/assets/svg/close.svg"
              alt="Cerrar"
              class="nav__close"
            />
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 20"
              class="nav__burger"
            >
              <g fill="#2b2a29" data-name="menu icon">
                <path d="M0 20h26l4-4H4Z" />
                <path d="M0 12h26l4-4H4Z" />
                <path d="M0 4h26l4-4H4Z" />
              </g>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  </header>
  <nav
    class="modal-menu"
    id="modal-menu"
    :class="{ 'modal-menu--active': menuOn }"
  >
    <ul class="modal-menu__list">
      <li class="modal-menu__element">
        <nuxt-link to="/servicios/"
          ><span class="modal-menu__text-wrapper">Servicio</span></nuxt-link
        >

        <ul class="modal-menu__sub-list">
          <li class="modal-menu__sub-element">
            <nuxt-link
              class="modal-menu__sub-link"
              to="/servicios/investigacion-analisis-publico"
              >Investigación y análisis del público</nuxt-link
            >
          </li>
          <li class="modal-menu__sub-element">
            <nuxt-link
              class="modal-menu__sub-link"
              to="/servicios/marketing-relacional"
              >Marketing relacional</nuxt-link
            >
          </li>
          <li class="modal-menu__sub-element">
            <nuxt-link
              class="modal-menu__sub-link"
              to="/servicios/planes-gestion-publicos"
              >Planes de gestión de públicos</nuxt-link
            >
          </li>
          <li class="modal-menu__sub-element">
            <nuxt-link
              class="modal-menu__sub-link"
              to="/servicios/experiencia-usuario"
              >Experiencia del usuario</nuxt-link
            >
          </li>
          <li class="modal-menu__sub-element">
            <nuxt-link
              class="modal-menu__sub-link"
              to="/servicios/training-formacion"
              >Training y Formación</nuxt-link
            >
          </li>
        </ul>
      </li>
      <li class="modal-menu__element">
        <nuxt-link to="/publicaciones"
          ><span class="modal-menu__text-wrapper"
            >Publicaciones</span
          ></nuxt-link
        >
      </li>
      <li class="modal-menu__element">
        <nuxt-link to="/blog"
          ><span class="modal-menu__text-wrapper">Blog</span></nuxt-link
        >
      </li>
      <li class="modal-menu__element">
        <nuxt-link to="/sobre-asimetrica"
          ><span class="modal-menu__text-wrapper"
            >Sobre Asimétrica</span
          ></nuxt-link
        >
      </li>
      <li class="modal-menu__element">
        <nuxt-link to="/contacto"
          ><span class="modal-menu__text-wrapper"
            >Agenda una llamada / Contacto</span
          ></nuxt-link
        >
      </li>
      <li class="modal-menu__element">
        <nuxt-link to="/newsletter"
          ><span class="modal-menu__text-wrapper">Newsletter</span></nuxt-link
        >
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
