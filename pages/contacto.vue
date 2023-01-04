<template>
  <DotSection
    title="El cambio comienza aquí"
    description="Puedes agendar una reunión o contactarnos de la forma que resulte más conveniente para ti. Estaremos encantados de atenderte"
  />
  <div class="contact-call-form">
    <div class="contact-call-form__text">
      <PageText
        title="Aquí te mostramos cómo programar una llamada con uno de nuestros consultores y saber qué esperar:"
        description="<p><strong>1 Programar una llamada</strong></p><p>Nuestras sesiones gratuitas de 30 -45 minutos son conversaciones sin presión diseñadas para descubrir los desafíos a los que se enfrenta la organización e intercambiar información, buenas prácticas y posibles rutas a explorar.</p><p><strong>2 Tener una sesión</strong></p><p>Durante nuestro tiempo juntos, discutiremos los objetivos que persigue tu organización y en su caso, podremos hablar sobre qué tipo de colaboración tendría más sentido.</p><p><strong>3 Comenzar a hacer frente al desafío</strong></p><p>Una vez compartida la información necesaria para entender mejor el contexto y los objetivos de la organización, propondríamos los próximos pasos y el cronograma para comenzar a hacer frente a los desafíos de la organización.</p>"
      />
    </div>
    <div class="contact-call-form__form">
      <PageText title="Agenda una llamada con nuestro equipo:" />
      <form action="" class="newsletter-form">
        <div class="input-container input-container--full">
          <label class="input-container__label" for="organization"
            >Nombre de mi organización</label
          >
          <input
            class="input-container__input"
            type="text"
            name="organization"
            id="organization"
            placeholder="Nombre de mi organización"
          />
        </div>
        <div class="input-container input-container--full">
          <p class="input-container__label">Nos dedicamos principalmente a:</p>
          <div class="radio-container">
            <div class="radio" v-for="(radio, index) in radios" :key="index">
              <input
                class="radio__input"
                type="radio"
                :id="radio.title"
                name="drone"
                :value="radio.title"
                checked
              />
              <label :for="radio.title" class="radio__label">{{
                radio.title
              }}</label>
            </div>
          </div>
        </div>
        <div class="input-container">
          <label class="input-container__label" for="country"
            >País / Región</label
          >
          <input
            class="input-container__input"
            type="text"
            name="country"
            id="country"
            placeholder="País/Región"
          />
        </div>
        <div class="input-container">
          <label class="input-container__label" for="province"
            >Estado / Provincia</label
          >
          <input
            class="input-container__input"
            type="text"
            name="province"
            id="province"
            placeholder="Estado / Provincia"
          />
        </div>
        <div></div>
        <button class="button button--full">Continuar</button>
      </form>
    </div>
  </div>
  <div class="separator"></div>
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
          <label class="input-container__label" for="phone">Teléfono</label>
          <input
            class="input-container__input"
            type="text"
            name="phone"
            id="phone"
            placeholder="Teléfono"
          />
        </div>
        <div class="input-container input-container--full">
          <label class="input-container__label" for="subject">Asunto</label>
          <input
            class="input-container__input"
            type="text"
            name="subject"
            id="subject"
            placeholder="Asunto"
          />
        </div>
        <div class="input-container input-container--full">
          <label class="input-container__label" for="message">Mensaje</label>
          <textarea
            class="input-container__input"
            type="text"
            name="message"
            id="message"
            placeholder="Mensaje"
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
      <div class="contact-commentary-form__information">
        <h2 class="contact-commentary-form__information-title">ASIMÉTRICA</h2>

        <ul class="contact-commentary-form__information-list">
          <li class="contact-commentary-form__information-element">
            <h3 class="contact-commentary-form__information-subtitle">
              Dirección:
            </h3>
            <p>Pilar de Zaragoza. 104, bajo B. Madrid 28028</p>
          </li>
          <li class="contact-commentary-form__information-element">
            <h3 class="contact-commentary-form__information-subtitle">
              Teléfono:
            </h3>
            <a
              href="tel:+34 629 88 14 44
"
              >+34 629 88 14 44
            </a>
          </li>
          <li class="contact-commentary-form__information-element">
            <h3 class="contact-commentary-form__information-subtitle">
              Correo electrónico:
            </h3>
            <a href="mailto:info@asimetrica.org">info@asimetrica.org</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="separator"></div>
  <div class="contact-newsletter">
    <PageText
      title="Newsletter Asimétrica"
      description="<p>Más de 2.000 gestores culturales ya reciben nuestra newsletter con los mejores recursos y noticias destacadas sobre investigación, marketing cultural y desarrollo de público para las artes.</p><p>Entérate antes que nadie sobre nuestras novedades, estudios y casos prácticos, recibe nuestra revista digital <strong>Conectando Audiencias</strong> en tu buzón de correo y forma parte de la comunidad más comprometida con la relación entre organizaciones artísticas y público.</p>"
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
  </div>
  <Subscribe />
</template>
<script setup lang="ts">
const radios: Object[] = [
  {
    title: "Coral / Vocal",
  },
  {
    title: "Ópera",
  },
  {
    title: "Circo",
  },
  {
    title: "Orquesta / Instrumental",
  },
  {
    title: "Danza / Ballet",
  },
  {
    title: "Centro Artes Escénicas",
  },
  {
    title: "Cine",
  },
  {
    title: "Servicios / Abogacía",
  },
  {
    title: "Fundación",
  },
  {
    title: "Teatro",
  },
  {
    title: "Literatura / Biblioteca",
  },
  {
    title: "TV / Radio",
  },
  {
    title: "Museo",
  },
  {
    title: "Ventas / Consultoría",
  },
  {
    title: "Otro",
  },
];
</script>
