<template>
  <PageHeader
    title="Servicios"
    subtitle="Investigación, consultoría y formación
para el sector cultural"
    :image="{ url: 'https://dummyimage.com/100.gif' }"
  />
  <Breadcrumbs link="Servicios" />
  <DotSection
    description="Resultados sostenibles para el sector cultural en términos de público"
  />
  <ImageParallax :image="{ url: 'https://dummyimage.com/100.gif' }" />
  <ServicesContainer />
  <Testimonials />
  <Customers togglesActive />
  <WorkUs />
  <Subscribe />
</template>
