<template>
  <PageHeader
    title="Experiencia del usuario"
    :image="{ url: '/images/header-borrar.jpg' }"
  />
  <Breadcrumbs />
  <div class="service-dot-section-container">
    <DotSection
      description="Cada contacto con los usuarios es una oportunidad para mejorar su experiencia"
    />
  </div>
  <section class="page-section-container">
    <PageText
      title="Investigación de público"
      description="<p>ASIMÉTRICA ofrece un conjunto de metodologías de investigación y análisis del público de las artes y la cultura que ha resultado de gran utilidad para administraciones públicas, teatros, auditorios, orquestas, museos, centros culturales y festivales de diferente naturaleza, contexto, dimensión y tipología. La investigación de público permite identificar aspectos clave sobre la caracterización de los usuarios y enriquecer las decisiones estratégicas y operativas de la organización con datos reales, incluyendo:</p><ul><li>Perfil sociodemográfico</li><li>Percepción de los usuarios, trabajadores y colaboradores sobre tu organización y su posicionamiento estratégico en el contexto cultural de tu ciudad o región.</li></ul>"
    />
    <ImageParallax :image="{ url: '/images/header-borrar.jpg' }" />
  </section>
  <TestimonialsCarrousel :testimonials="page.data.testimonials" />
  <WhatWeDo />
  <WorkUs />
  <Subscribe />
</template>
<script lang="ts" setup>
const { data: page } = useFetch<any>(
  "https://api.asimetrica.abanico.net/api/pages/7"
);
</script>
