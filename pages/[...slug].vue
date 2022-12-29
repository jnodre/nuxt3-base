<template>
  <Breadcrumbs title="Página no encontrada" />
  <main class="error">
    <div class="error__image">
      <img src="https://dummyimage.com/1000x600.jpg" alt="" />
    </div>
    <h1 class="error__title">Página no encontrada</h1>
    <h2 class="error__description">
      ¡Lo sentimos! Parece que la página que buscas no existe, tal vez te
      interese alguna de las siguientes páginas:
    </h2>
    <nav>
      <ul class="error__menu">
        <li>
          <nuxt-link class="button button--full" to="/servicios"
            >Servicios</nuxt-link
          >
        </li>
        <li>
          <nuxt-link class="button button--full" to="/sobre-asimetrica"
            >Sobre Asimétrica</nuxt-link
          >
        </li>
        <li>
          <nuxt-link class="button button--full" to="/publicaciones"
            >Publicaciones</nuxt-link
          >
        </li>
        <li>
          <nuxt-link class="button button--full" to="/contacto"
            >Agenda una llamada / Contacto</nuxt-link
          >
        </li>
      </ul>
    </nav>
  </main>
  <WorkUs />
  <Subscribe />
</template>
