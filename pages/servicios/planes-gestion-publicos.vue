<template>
  <PageHeader
    title="Planes de gestión de públicos"
    :image="{ url: '/images/header-borrar.jpg' }"
  />
  <Breadcrumbs />
  <div class="service-dot-section-container">
    <DotSection
      description="Un marco estratégico en el campo de la gestión de públicos para organizaciones culturales"
    />
  </div>
  <section class="page-section-container">
    <PageText
      title="Investigación de público"
      description="<p>ASIMÉTRICA ofrece un conjunto de metodologías de investigación y análisis del público de las artes y la cultura que ha resultado de gran utilidad para administraciones públicas, teatros, auditorios, orquestas, museos, centros culturales y festivales de diferente naturaleza, contexto, dimensión y tipología. La investigación de público permite identificar aspectos clave sobre la caracterización de los usuarios y enriquecer las decisiones estratégicas y operativas de la organización con datos reales, incluyendo:</p><ul><li>Perfil sociodemográfico</li><li>Percepción de los usuarios, trabajadores y colaboradores sobre tu organización y su posicionamiento estratégico en el contexto cultural de tu ciudad o región.</li></ul>"
    />
    <ImageParallax :image="{ url: '/images/header-borrar.jpg' }" />
  </section>
  <TestimonialsCarrousel
    title="Clientes y Testimonios"
    :testimonials="[
      {
        name: 'Alan Brown',
        company: 'Wolfbrown',
        description:
          '“Asociarnos a Asimétrica nos ha abierto la comprensión del público de las artes en España y Latino América. Estamos orgullosos de trabajar con un socio serio, íntegro y profesional, capaz de realizar complejos estudios de público para las artes escénicas y museos fuera de EEUU.”',
      },
      {
        name: 'Félix Alcaraz',
        company: 'Orquesta y Coro Nacionales de España',
        description:
          '“Con Asimétrica hemos sido capaces de invertir la tendencia de caídas en los abonos que sacudía a la OCNE en los últimos años. Gracias a sus estrategias de desarrollo de producto y a las campañas de renovación y recuperación de abonados podemos mirar al futuro con confianza.”',
      },
      {
        name: 'Félix Alcaraz',
        company: 'Orquesta y Coro Nacionales de España',
        description:
          '“Con Asimétrica hemos sido capaces de invertir la tendencia de caídas en los abonos que sacudía a la OCNE en los últimos años. Gracias a sus estrategias de desarrollo de producto y a las campañas de renovación y recuperación de abonados podemos mirar al futuro con confianza.”',
      },
      {
        name: 'Félix Alcaraz',
        company: 'Orquesta y Coro Nacionales de España',
        description:
          '“Con Asimétrica hemos sido capaces de invertir la tendencia de caídas en los abonos que sacudía a la OCNE en los últimos años. Gracias a sus estrategias de desarrollo de producto y a las campañas de renovación y recuperación de abonados podemos mirar al futuro con confianza.”',
      },
      {
        name: 'Félix Alcaraz',
        company: 'Orquesta y Coro Nacionales de España',
        description:
          '“Con Asimétrica hemos sido capaces de invertir la tendencia de caídas en los abonos que sacudía a la OCNE en los últimos años. Gracias a sus estrategias de desarrollo de producto y a las campañas de renovación y recuperación de abonados podemos mirar al futuro con confianza.”',
      },
      {
        name: 'Félix Alcaraz',
        company: 'Orquesta y Coro Nacionales de España',
        description:
          '“Con Asimétrica hemos sido capaces de invertir la tendencia de caídas en los abonos que sacudía a la OCNE en los últimos años. Gracias a sus estrategias de desarrollo de producto y a las campañas de renovación y recuperación de abonados podemos mirar al futuro con confianza.”',
      },
    ]"
  />
  <WhatWeDo />
  <WorkUs />
  <Subscribe />
</template>
<script lang="ts" setup>
const { data: page } = await useFetch(
  "https://api.asimetrica.abanico.net/api/pages/6"
);
</script>
