<template>
  <Breadcrumbs />
  <DotSection
    title="The change start here"
    description="You can schedule a video call with our team or contact us in the way that is most convenient for you. We will be happy to assist you as well as we can."
  />
  <div class="contact-call-form">
    <div class="contact-call-form__text">
      <PageText
        title="Here's how to schedule a call with one of our consultants and find out what to expect:"
        description="<p><strong>1st Schedule a call</strong></p><p>Our free 30-45 minute sessions are pressure-free conversations designed to uncover the challenges your organization is facing and exchange information, best practices and possible paths to explore.</p><p><strong>2nd Have a seassion</strong></p><p>During our time together, we will discuss the goals your organization is pursuing and where appropriate, we can talk about what type of collaboration would make the most sense.</p><p><strong>3rd Begin meeting the challenge</strong></p><p>Once the necessary information has been shared to better understand the context and objectives of the organization, we would propose the next steps and the timetable to begin to face the challenges of the organization.</p>"
      />
    </div>
    <div class="contact-call-form__form">
      <PageText title="Schedule a call with our team:" />
      <form action="" class="newsletter-form">
        <div class="input-container input-container--full">
          <label class="input-container__label" for="organization"
            >Name of my organization</label
          >
          <input
            class="input-container__input"
            type="text"
            name="organization"
            id="organization"
            placeholder="Name of my organization"
          />
        </div>
        <div class="input-container input-container--full">
          <p class="input-container__label">We are mainly dedicated to:</p>
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
            >Country / Region</label
          >
          <input
            class="input-container__input"
            type="text"
            name="country"
            id="country"
            placeholder="Country/Region"
          />
        </div>
        <div class="input-container">
          <label class="input-container__label" for="province"
            >State / Province</label
          >
          <input
            class="input-container__input"
            type="text"
            name="province"
            id="province"
            placeholder="State/Province"
          />
        </div>
        <div></div>
        <button class="button button--full">Continue</button>
      </form>
    </div>
  </div>
  <div class="separator"></div>
  <div class="contact-commentary-form">
    <PageText
      title="We listen with interest to any question, comment or suggestion"
      description="You can contact us in the way that is most convenient for you. We are available 24/7 via email. You can also use the quick inquiry form below, call us or visit our offices in person with any questions or suggestions. We will be happy to assist you."
    />
    <div class="contact-commentary-form__container">
      <form action="" class="newsletter-form">
        <div class="input-container">
          <label class="input-container__label" for="name">Name</label>
          <input
            class="input-container__input"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
          />
        </div>
        <div class="input-container">
          <label class="input-container__label" for="surname">Surname</label>
          <input
            class="input-container__input"
            type="text"
            name="surname"
            id="surname"
            placeholder="Surname"
          />
        </div>
        <div class="input-container">
          <label class="input-container__label" for="email">Email</label>
          <input
            class="input-container__input"
            type="text"
            name="email"
            id="email"
            placeholder="Email"
          />
        </div>
        <div class="input-container">
          <label class="input-container__label" for="phone">Phone</label>
          <input
            class="input-container__input"
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone"
          />
        </div>
        <div class="input-container input-container--full">
          <label class="input-container__label" for="subject">Issue</label>
          <input
            class="input-container__input"
            type="text"
            name="subject"
            id="subject"
            placeholder="Issue"
          />
        </div>
        <div class="input-container input-container--full">
          <label class="input-container__label" for="message">Message</label>
          <textarea
            class="input-container__input"
            type="text"
            name="message"
            id="message"
            placeholder="Briefly describe the reason for the contact"
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
            >I have read and accept the
            <nuxt-link to="/politica-de-privacidad"
              >privacy policy</nuxt-link
            ></label
          >
        </div>
        <div></div>
        <button class="button button--full">Send</button>
      </form>
      <div class="contact-commentary-form__information">
        <h2 class="contact-commentary-form__information-title">ASIMÉTRICA</h2>

        <ul class="contact-commentary-form__information-list">
          <li class="contact-commentary-form__information-element">
            <h3 class="contact-commentary-form__information-subtitle">
              Adress:
            </h3>
            <p>Pilar de Zaragoza. 104, bajo B. Madrid 28028</p>
          </li>
          <li class="contact-commentary-form__information-element">
            <h3 class="contact-commentary-form__information-subtitle">
              Phone:
            </h3>
            <a
              href="tel:+34 629 88 14 44
  "
              >+34 629 88 14 44
            </a>
          </li>
          <li class="contact-commentary-form__information-element">
            <h3 class="contact-commentary-form__information-subtitle">
              Email:
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
      description="<p>More than 2,000 cultural managers already receive our newsletter with the best resources and outstanding news on research, cultural marketing and audience development for the arts.</p><p>Find out before anyone else about our news, studies and case studies, receive our digital magazine <strong>Conectando Audiencias</strong> in your mailbox and be part of the community most committed to the relationship between artistic organizations and the public.</p>"
    />
    <form action="" class="newsletter-form">
      <div class="input-container">
        <label class="input-container__label" for="name">Name</label>
        <input
          class="input-container__input"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
        />
      </div>
      <div class="input-container">
        <label class="input-container__label" for="surname">Surname</label>
        <input
          class="input-container__input"
          type="text"
          name="surname"
          id="surname"
          placeholder="Surname"
        />
      </div>
      <div class="input-container">
        <label class="input-container__label" for="email">Email</label>
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
          >Confirm the Email</label
        >
        <input
          class="input-container__input"
          type="text"
          name="repeat-email"
          id="repeat-email"
          placeholder="Confirm the Email"
        />
      </div>
      <div class="input-container input-container--full">
        <label class="input-container__label" for="job"
          >Organization / Position / Dedication</label
        >
        <input
          class="input-container__input"
          type="text"
          name="job"
          id="job"
          placeholder="Organization / Position / Dedication"
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
          >I have read and accept the
          <nuxt-link to="/politica-de-privacidad"
            >privacy policy</nuxt-link
          ></label
        >
      </div>
      <div></div>
      <button class="button button--full">Suscribe</button>
    </form>
  </div>
  <SubscribeEn />
</template>
<script setup lang="ts">
definePageMeta({ layout: "en" });
const radios: Object[] = [
  {
    title: "Choral / Vocal",
  },
  {
    title: "Opera",
  },
  {
    title: "Circus",
  },
  {
    title: "Orchestra / Instrumental",
  },
  {
    title: "Dance / Ballet",
  },
  {
    title: "Performing Arts Center",
  },
  {
    title: "Film",
  },
  {
    title: "Services / Advocacy",
  },
  {
    title: "Foundation",
  },
  {
    title: "Theater",
  },
  {
    title: "Literary / Library",
  },
  {
    title: "TV / Radio",
  },
  {
    title: "Museum",
  },
  {
    title: "Vendor / Consultant",
  },
  {
    title: "Other",
  },
];
</script>
