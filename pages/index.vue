<template>
  <PageHeader
    title="Te damos la bienvenida a
    Asimétrica"
    subtitle="Investigación, consultoría y formación
    para el sector cultural"
    :image="{ url: 'https://dummyimage.com/100.gif' }"
  />
  <DotSection
    description="ASIMÉTRICA es un equipo de profesionales de la gestión cultural preparado para conocer y ampliar el público de las organizaciones culturales de forma sostenible."
  />

  <ServicesContainer />
  <WorkUs />
  <Testimonials />
  <HistorySection
    :elements="[
      {
        title: '1º Así comenzamos…',
        description:
          '<p>ASIMÉTRICA nace en Madrid en <strong>2010</strong> con la vocación de <strong>añadir valor</strong> a la relación entre artistas, organizaciones culturales y público. Investigación, consultoría y formación al servicio de las artes y la cultura.</p>',
      },
      {
        title: '1º Así comenzamos…',
        description:
          '<p>ASIMÉTRICA nace en Madrid en <strong>2010</strong> con la vocación de <strong>añadir valor</strong> a la relación entre artistas, organizaciones culturales y público. Investigación, consultoría y formación al servicio de las artes y la cultura.</p>',
      },
    ]"
  />
  <Team title="Equipo" />
</template>
<script setup lang="ts"></script>
