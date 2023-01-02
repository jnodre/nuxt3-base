<template>
  <DotSection
    title="El cambio comienza aquí"
    description="Puedes agendar una reunión o contactarnos de la forma que resulte más conveniente para ti. Estaremos encantados de atenderte"
  />
  <div class="contact-commentary-form">
    <PageText
      title="Escuchamos con interés cualquier consulta, comentario o sugerencia"
      description="Puedes contactarnos de la forma que resulte más conveniente para ti. Estamos disponibles 24/7 vía email. También puedes usar el formulario de consulta rápida que aparece a continuación, llamar por teléfono o visitar nuestras oficinas personalmente con cualquier pregunta o sugerencia. Estaremos encantados de atenderte."
    />
    <div class="contact-commentary-form__container">
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
        <button class="button button--full">Enviar</button>
      </form>
      <div></div>
    </div>
  </div>
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
  <Subscribe />
</template>
