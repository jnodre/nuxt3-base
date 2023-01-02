<template>
  <Breadcrumbs />
  <div class="separator"></div>
  <DotSection
    title="Newsletter Asimétrica"
    description="Suscríbete a información mensual y para recibir cada nuevo número de Conectando Audiencias cómodamente en tu correo electrónico"
  />
  <PageText
    description="<div style='text-align: center'><p>Más de 2.000 gestores culturales ya reciben nuestra newsletter con los mejores recursos y noticias destacadas sobre investigación, marketing cultural y desarrollo de público para las artes.</p><p>Entérate antes que nadie sobre nuestras novedades, estudios y casos prácticos, recibe nuestra revista digital <strong>Conectando Audiencias</strong> en tu buzón de correo y forma parte de la comunidad más comprometida con la relación entre organizaciones artísticas y público.</p></div>"
  />
  <form action="" class="newsletter-form">
    <div class="input-container">
      <label class="input-container__label" for="name">Nombre</label>
      <input
        class="input-container__input"
        type="text"
        name="name"
        id="name"
        placeholder="Nombre"
      />
    </div>
    <div class="input-container">
      <label class="input-container__label" for="surname">Apellidos</label>
      <input
        class="input-container__input"
        type="text"
        name="surname"
        id="surname"
        placeholder="Apellidos"
      />
    </div>
    <div class="input-container">
      <label class="input-container__label" for="email"
        >Correo electrónico</label
      >
      <input
        class="input-container__input"
        type="text"
        name="email"
        id="email"
        placeholder="Email"
      />
    </div>
    <div class="input-container">
      <label class="input-container__label" for="repeat-email"
        >Confirmar correo electrónico</label
      >
      <input
        class="input-container__input"
        type="text"
        name="repeat-email"
        id="repeat-email"
        placeholder="Confirmar correo electrónico"
      />
    </div>
    <div class="input-container input-container--full">
      <label class="input-container__label" for="job"
        >Organización / Cargo / Dedicación</label
      >
      <input
        class="input-container__input"
        type="text"
        name="job"
        id="job"
        placeholder="Organización / Cargo / Dedicación"
      />
    </div>
    <div class="checkbox-container">
      <input
        class="checkbox-container__checkbox"
        type="checkbox"
        name="privacy"
        id="privacy"
      />
      <label for="privacy" class="checkbox-container__label"
        >He leído y acepto la
        <nuxt-link to="/politica-de-privacidad"
          >política de privacidad</nuxt-link
        ></label
      >
    </div>
    <div></div>
    <button class="button button--full">Suscribirme</button>
  </form>
  <WorkUs />
  <Subscribe />
</template>
