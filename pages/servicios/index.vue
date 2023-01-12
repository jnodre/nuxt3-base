<template>
  <PageHeader
    title="Servicios"
    subtitle="Investigación, consultoría y formación
para el sector cultural"
    :image="{ url: '/images/header-borrar.jpg' }"
  />
  <Breadcrumbs />
  <DotSection
    description="Resultados sostenibles para el sector cultural en términos de público"
  />
  <!--TODO falta un contenedor-->
  <ImageParallax :image="{ url: '/images/header-borrar.jpg' }" />
  <ServicesContainer title="Áreas de trabajo" />
  <TestimonialsCarrousel />
  <Customers togglesActive />
  <WorkUs />
  <Subscribe />
</template>
