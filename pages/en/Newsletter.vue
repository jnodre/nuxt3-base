<template>
  <Breadcrumbs />
  <DotSection
    title="Newsletter Asimétrica"
    description="Subscribe to monthly information and to receive each new issue of Conectando Audiencias comfortably in your email."
  />
  <PageText
    description="<div style='text-align: center'><p>More than 2,000 cultural managers already receive our newsletter with the best resources and outstanding news on research, cultural marketing and audience development for the arts.
</p><p>Find out before anyone else about our news, studies and case studies, receive our digital magazine <strong>Conectando Audiencias</strong> in your mailbox and be part of the community most committed to the relationship between artistic organizations and the public.</p></div>"
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
        >Confirm the email</label
      >
      <input
        class="input-container__input"
        type="text"
        name="repeat-email"
        id="repeat-email"
        placeholder="Confirm the email"
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
  <WorkUsEn />
  <SubscribeEn />
</template>
<script lang="ts" setup>
definePageMeta({ layout: "en" });
</script>
